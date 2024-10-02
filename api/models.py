from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    favourite_pokemon = models.CharField(max_length=100, blank=True, null=True)

