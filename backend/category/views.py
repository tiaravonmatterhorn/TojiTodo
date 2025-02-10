from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Category
from .serializers import CategorySerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class CategoryUpdateView(RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Category.objects.filter(user_id=user_id)
    
    def perform_update(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()
    