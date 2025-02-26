from ast import Is
from urllib import request
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from todo.models import Todo
from todo.serializers import TodoSerializer
from .serializers import UserSerializer
from category.models import Category 
from category.serializers import CategorySerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

# user data 
# class UserProfileView(ListAPIView):
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]

#     queryset = User.objects.all()

# user data 
class UserProfileView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
    def perform_update(self, serializer):
        serializer.save() 


# Todos by Users view as App is User-centric
class TodosByUserView(ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    # return all todos by user
    def get_queryset(self):
        user = self.request.user
        queryset = Todo.objects.filter(user = user)

        search_term = self.request.query_params.get('search', None) # get search term from query params
        if search_term:
            queryset = queryset.filter(title__icontains=search_term) | queryset.filter(description__icontains=search_term)

        return queryset
    
    # create a todo for a user and associates it with the user
    def perform_create(self, serializer):
        user = self.request.user
        print(f"Creating Todo for user: {user}")  # Debug statement
        serializer.save(user = user)    

class CategoriesByUserView(ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    # return all categories by user
    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Category.objects.filter(user_id=user_id)
    
    def perform_create(self, serializer):
        user_id = self.kwargs['user_id']
        serializer.save(user_id=user_id)