from django.db import models

import string
import random

# Create your models here.

def unique_code_generator():
        length = 6
        while True:
            code = ''.join(random.choices(string.ascii_uppercase, k=length))
            if OrderModel.objects.filter(code=code).count() == 0:
                break
        return code

def name_generator():
    name = ''.join(random.choices(string.ascii_letters, k=4))
    return name
class OrderModel(models.Model):
    code = models.CharField(max_length=8, default='', unique=True)
    created_on = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=15, blank=True)
    country = models.CharField(max_length=50, blank=True)
    quantity = models.IntegerField(blank=True, null=True)
    slug = models.SlugField(null=True)

    def __str__(self):
        return f'Order: {self.created_on.strftime("%b %d %I: %M %p")}'

    def get_absolute_url(self):
        return reverse('order_detail', kwargs={'slug': self.slug}) 