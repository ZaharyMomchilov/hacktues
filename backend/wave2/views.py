from rest_framework import permissions, viewsets

from .models import Team, Technology, User
from .permissions import UserPermissions, TeamPermissions
from .serializers import TeamSerializer, TechnologySerializer, UserSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated, TeamPermissions]

    def perform_create(self, serializer):
        user = serializer._kwargs['context']['request'].user
        user.is_captain = True
        user.save()
        return super().perform_create(serializer)


class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, UserPermissions]

