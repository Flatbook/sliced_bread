from django.db import models
import uuid

class Order(models.Model):
    customer = models.CharField(max_length=50, default='Customer')
    quantity = models.IntegerField(default=1)
    city = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    confirmation_number = models.UUIDField(unique=True, default=uuid.uuid4)

    def __str__(self):
        return f'Customer: {self.customer}, Quantity: {self.quantity}, City: {self.city}, Province: {self.province}, Country: {self.country}'