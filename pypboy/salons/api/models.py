from django.db import models
from django.contrib.auth.models import User

class Salon(models.Model):
    name = models.CharField(required=True)
    created_at = models.DateField()
    creator = models.ForeignKey(User, required=True)
    guest = models.ForeignKey(User)