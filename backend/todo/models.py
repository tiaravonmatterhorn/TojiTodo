from django.db import models
from category.models import Category
from tag.models import Tag
from django.contrib.auth import get_user_model
from django.utils.timezone import now


User = get_user_model()

# Create your models here.
class Todo(models.Model):
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='todos')
    tags = models.ManyToManyField(Tag, blank=True, related_name='todos')
    due_date = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

    def get_priority_display(self):
        return self.priority.capitalize()
    
    def save(self, *args, **kwargs):
        if self.completed and not self.completed_at:
            self.completed_at = now()
            self.user.last_completed_date = now().date()
            self.user.update_streak()
            self.user.save()

        super().save(*args, **kwargs)