from django.db import models
from shortuuidfield import ShortUUIDField

# Create your models here.
class Order(models.Model):
    customerName = models.CharField(max_length=200)
    quantityOfDrinks = models.PositiveBigIntegerField(default=0)
    city = models.CharField(max_length=200)
    stateOrProvince = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    orderNumber = ShortUUIDField(max_length=33) #https://stackoverflow.com/questions/1179439/best-way-to-generate-order-numbers-for-an-online-store 

    def __str__(self):
        return self.orderNumber