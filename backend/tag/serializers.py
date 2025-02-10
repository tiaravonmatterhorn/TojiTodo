from rest_framework import serializers
from textblob import TextBlob
from .models import Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']
        read_only_fields = ['created_by']

    def validate_name(self, value):
        # check if tag name is unique
        if Tag.objects.filter(name=value).exists():
            raise serializers.ValidationError("Tag with this name already exists.")
        
        # check for spaces in tag name
        if ' ' in value:
            raise serializers.ValidationError("Tag name cannot contain spaces.")
        
        # spelling check for tag name
        corrected_value = str(TextBlob(value).correct())
        if corrected_value != value:
            raise serializers.ValidationError(f"Did you mean {corrected_value}?")
        
        return value
    
    def create(self, validated_data):
        tag = Tag.objects.create(**validated_data, created_by=self.context['request'].user)
        return tag