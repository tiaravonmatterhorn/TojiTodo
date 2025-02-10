from django.urls import path
from .views import CategoryUpdateView

urlpatterns = [
    path('user/<int:user_id>/category/<int:pk>/', CategoryUpdateView.as_view(), name='category-update'),
]