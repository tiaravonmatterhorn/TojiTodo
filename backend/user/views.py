from ast import Is
from django.shortcuts import render
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from todo.models import Todo
from todo.serializers import TodoSerializer
from .serializers import UserSerializer
from category.models import Category 
from category.serializers import CategorySerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

# user profile 
class UserProfileView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()


# Todos by Users view as App is User-centric
class TodosByUserView(ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    # return all todos by user
    def get_queryset(self):
        user_id = self.kwargs['user_id']
        queryset = Todo.objects.filter(user_id=user_id)

        search_term = self.request.query_params.get('search', None) # get search term from query params
        if search_term:
            queryset = queryset.filter(title__icontains=search_term) | queryset.filter(description__icontains=search_term)

        return queryset
    
    # create a todo for a user and associates it with the user
    def perform_create(self, serializer):
        user_id = self.kwargs['user_id']
        serializer.save(user_id=user_id)    

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