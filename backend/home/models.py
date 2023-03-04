from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=100,)
    description = models.TextField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    instructions = models.TextField()
    image = models.CharField(max_length=256,)
