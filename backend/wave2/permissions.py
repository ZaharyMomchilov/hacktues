from rest_framework import permissions


def is_admin_or_safe(request):
    return (
        request.user.is_superuser or
        request.method in permissions.SAFE_METHODS
    )


class UserPermissions(permissions.BasePermission):
    """
    allowed methods:

    unregistered user - get, post
    registered user - get, put*, delete*
    """
    def has_permission(self, request, view):
        if request.method == 'POST':
            return request.user.is_staff  # only special users / unregistered

        return True


    def has_object_permission(self, request, view, obj):
        if is_admin_or_safe(request) or request.user == obj:
            return True

        return False
        

class TeamPermissions(permissions.BasePermission):
    """
    allowed methods:

    unregistered user: - get
    registered user: - get
    captain: - get, put*, delete*
    """
    def has_permission(self, request, view):
        if is_admin_or_safe(request):
            return True

        if request.method == 'POST':
            return not request.user.is_staff  # only real users

        return True

    def has_object_permission(self, request, view, obj):
        is_team_captain = (
            request.user.is_captain and request.user.team_set == obj
        )
        if is_admin_or_safe(request) or is_team_captain:
            return True
        
        return False

