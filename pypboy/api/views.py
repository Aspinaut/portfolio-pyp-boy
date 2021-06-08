from django.shortcuts import render
from rest_framework import generics
from .serializers import UserListSerializer, UserDetailSerializer
from .models import User

# Create your views here.

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer

class UserRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class UserRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class UserDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
