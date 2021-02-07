from unittest.mock import patch

from rest_framework import status
from rest_framework.test import APIClient, APITestCase

from wave2.models import FieldValidationDate, SmallInteger, Team, User
from wave2.serializers import date


def set_up(func):

    def setUp(self):
        self.data = {
            'first_name': 'First', 'last_name': 'Last',
            'email': 'firstlast@abv.bg', 'password': 'hello',
            'username': 'josen', 'is_active': True, 'tshirt_size': 'l',
            'form': '11g', 'is_superuser': True
        }
        self.user = User.objects.create_user(**self.data)
        self.client = APIClient()
        self.client.force_authenticate(self.user)

        func(self)

    return setUp


class TestTeam(APITestCase):
    @set_up
    def setUp(self):
        self.min = 3
        self.max = 5
        self.max_teams = 2
        SmallInteger.objects.create(name='min_users_in_team', value=self.min)
        SmallInteger.objects.create(name='max_users_in_team', value=self.max)
        SmallInteger.objects.create(name='max_teams', value=self.max_teams)

        self.team = Team.objects.create()

    def test_post_201_is_full_returns_false_when_not_confirmed(self):
        data = {
            'name': 'hello',
            'github_link': 'https://github.com/././',
            'users': [f'http://testserver/users/{self.user.id}/'],
            'is_full': True,
        }

        response = self.client.post(f'/teams/', data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertFalse(self.team.is_full, 'team should not be full')

    def test_patch_200_is_full_returns_false_when_not_confirmed(self):

        response = self.client.patch(f'/teams/{self.team.id}/', {'is_full': True})
        self.team.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(self.team.is_full, 'team should not be full')

    def test_patch_200_team_may_be_full_when_confirmed(self):
        self.team.users.set(
            [User.objects.create(username=str(i)) for i in range(self.min)]
        )

        response = self.client.patch(f'/teams/{self.team.id}/', {'is_full': True})
        self.team.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(self.team.is_full, 'team should be full')

    def test_post_400_maximum_teams_limit_exceeded(self):
        data = {
            'name': 'hello',
            'github_link': 'https://github.com/././',
            'users': [f'http://testserver/users/{self.user.id}/'],
        }
        self.client.post(f'/teams/', data)
        data['name'] = 'world'

        response = self.client.post(f'/teams/', data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Team.objects.count(), self.max_teams)


class TestUserPasswordManagement(APITestCase):
    @set_up
    def setUp(self):
        pass

    def test_get_password_not_visible(self):
        response = self.client.get(f'/users/{self.user.id}/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotIn('password', response.data)

    def test_post_password_is_hashed_correctly_on_creation(self):
        self.data['username'] = 'pass'
        self.user.is_staff = True
        self.user.save()

        response = self.client.post(f'/users/', self.data)
        user = User.objects.get(id=self.user.id)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(user.check_password('hello'), "Passsword created incorectly")

    def test_patch_password_is_hashed_correctly_on_update(self):
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'password': 'pass'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(user.check_password('pass'), "Passsword updated incorectly")

    def test_put_password_is_not_changed_on_other_fields_update(self):
        user_id = self.user.id
        del self.data['password']

        response = self.client.put(f'/users/{user_id}/', self.data)
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(user.check_password('hello'), "Passsword should not be changed")

    def test_put_password_is_not_changed_if_blank(self):
        """
        When making PUT request from drf generated html,
        blank password is sent as the password is in the
        serializer fields
        """
        user_id = self.user.id
        self.data['password'] = ''

        response = self.client.put(f'/users/{user_id}/', self.data)
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(user.check_password('hello'), "Passsword should not be changed")


@patch('wave2.serializers.date', autospec=True)
class TestUserFieldValidationOnSpecificDates(APITestCase):
    @set_up
    def setUp(self):
        pass

    def test_get_200(self, *args):
        response = self.client.get(f'/users/{self.user.id}/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_patch_field_uneditable_on_this_date_400(self, date_mock):
        date_mock.today.return_value = date(2019, 1, 2)  # today is 2.1.2019
        validation_date = date(2019, 1, 1)  # 1.1.2019 - befote today
        FieldValidationDate.objects.create(field='tshirt_size', date=validation_date)
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'tshirt_size': 'm'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(user.tshirt_size, 'l')

    def test_patch_field_editable_on_this_date_200(self, date_mock):
        date_mock.today.return_value = date(2019, 1, 2)  # today is 2.1.2019
        validation_date = date(2019, 1, 2)
        FieldValidationDate.objects.create(field='tshirt_size', date=validation_date)
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'tshirt_size': 'm'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(user.tshirt_size, 'm')

    def test_patch_field_uneditable_but_not_edited_200(self, date_mock):
        date_mock.today.return_value = date(2019, 1, 2)  # today is 2.1.2019
        validation_date = date(2019, 1, 1)  # 1.1.2019 - befote today
        FieldValidationDate.objects.create(field='tshirt_size', date=validation_date)
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'tshirt_size': 'l'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(user.tshirt_size, 'l')

    def test_patch_editable_field_200(self, date_mock):
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'first_name': 'First name'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(user.first_name, 'First name')

    def test_patch_one_editable_one_uneditable_field_on_this_date_400(self, date_mock):
        date_mock.today.return_value = date(2019, 1, 2)  # today is 2.1.2019
        validation_date1 = date(2019, 1, 1)  # 1.1.2019 - befote today
        validation_date2 = date(2019, 1, 2)  # today
        FieldValidationDate.objects.create(field='alergies', date=validation_date1)
        FieldValidationDate.objects.create(field='tshirt_size', date=validation_date2)
        user_id = self.user.id

        response = self.client.patch(f'/users/{user_id}/', {'tshirt_size': 'm', 'alergies': 'no'})
        user = User.objects.get(id=user_id)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(user.tshirt_size, 'l')
        self.assertFalse(user.alergies, 'alergies changed after validation date')

