from webbrowser import get
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Tag(models.Model):
    """ Model for tagging todos. """
    name = models.CharField(max_length=50, unique=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tags', null=True, blank=True)

    def __str__(self):
        return self.name