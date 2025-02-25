from django.urls import path
from .views import TodoUpdateView

urlpatterns = [
    path('me/todo/<int:pk>/', TodoUpdateView.as_view(), name='todo-update'),
]
