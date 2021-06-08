from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UserListAPIView.as_view(), name = 'users_list'),
    path('api/user/<int:id>', views.UserListAPIView.as_view(), name = 'user_detail'),
    path('api/user/create/', views.UserCreateAPIView.as_view(), name = 'user_create'),
    path('api/user/update/<int:id>', views.UserRetrieveUpdateAPIView.as_view(), name = 'user_update'),
    path('api/user/delete/<int:id>', views.UserDestroyAPIView.as_view(), name = 'user_delete'),
]
