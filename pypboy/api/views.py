from django.shortcuts import render
from rest_framework import generics, viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer

from knox.views import LoginView as KnoxLoginView
from knox.views import LogoutView as KnoxLogoutView
from rest_framework.authentication import BasicAuthentication

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(KnoxLoginView):
    authentication_classes = [BasicAuthentication]

class LogoutView(KnoxLogoutView):
    authentication_classes = [BasicAuthentication]