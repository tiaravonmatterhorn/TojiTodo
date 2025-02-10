from django.urls import path
from .views import TagCreateView

urlpatterns = [
    path('', TagCreateView.as_view(), name='tag-list-create'),
]