from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TodoUpdateView(RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Todo.objects.filter(user_id=user_id)
    
    def perform_update(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()