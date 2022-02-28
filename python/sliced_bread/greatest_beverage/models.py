from django.db import models
from shortuuidfield import ShortUUIDField


class Customer(models.Model):
    name = models.CharField(max_length=100, blank =True)
    quantity = models.PositiveSmallIntegerField(default=1, blank=True)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    confirmation_id = ShortUUIDField(max_length=10)

    def __str__(self):
        return self.confirmation_id
    
