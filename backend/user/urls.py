from django.urls import path
from .views import UserProfileView, TodosByUserView, CategoriesByUserView

urlpatterns = [
    path('me/', UserProfileView.as_view(), name='user-profile'),
    path('me/todos/', TodosByUserView.as_view(), name='todos-by-user'),
    path('<int:user_id>/categories/', CategoriesByUserView.as_view(), name='categories-by-user'),
]