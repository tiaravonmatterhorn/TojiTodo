from django.urls import path
from .views import TodoUpdateView

urlpatterns = [
    path('user/<int:user_id>/todo/<int:pk>/', TodoUpdateView.as_view(), name='todo-update'),
]
