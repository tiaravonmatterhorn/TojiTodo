from rest_framework.generics import ListCreateAPIView
from .serializers import TagSerializer
from .models import Tag
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TagCreateView(ListCreateAPIView):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    
    def get_queryset(self):
        return Tag.objects.all()