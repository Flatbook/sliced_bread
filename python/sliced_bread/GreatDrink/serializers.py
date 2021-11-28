from rest_framework import serializers
from .models import Order

class GreatDrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('orderNumber', 'customerName', 'quantityOfDrinks', 'city', 'stateOrProvince', 'country' )