from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
# from .serializers import UserListSerializer, UserDetailSerializer
from .models import ToDoList, Item
# from .models import User

# Create your views here.

def index(response, name):
    ls = ToDoList.objects.get(name=name)
    item = ls.item_set.get(id=2)
    # return HttpResponse("<h1>%s</h1>" %ls.name)
    return HttpResponse("<h1>%s</h1><br><p>%s</p>" %(ls.name, item.text))
#
# class UserListAPIView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserListSerializer
#
# class UserRetrieveAPIView(generics.RetrieveAPIView):
#     lookup_field = "id"
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#
# class UserCreateAPIView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#
# class UserRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
#     lookup_field = "id"
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#
# class UserDestroyAPIView(generics.DestroyAPIView):
#     lookup_field = "id"
#     queryset = User.objects.all()
