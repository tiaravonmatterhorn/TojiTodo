from os import read
from .models import Todo
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
    # priority_display = serializers.CharField(source='get_priority_display', read_only=True)
    # priority = serializers.ChoiceField(choices=Todo.PRIORITY_CHOICES)

    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed', 'priority', 'category', 'tags', 'due_date']
        read_only_fields = ['created_by', 'created_at', 'updated_at', 'user']
