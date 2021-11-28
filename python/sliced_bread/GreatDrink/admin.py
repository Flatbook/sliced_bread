from django.contrib import admin
from .models import Order

class GreatDrinkAdmin(admin.ModelAdmin):
    list_display = ('customerName', 'quantityOfDrinks', 'city','stateOrProvince', 'country', 'orderNumber')

# Register your models here.

admin.site.register(Order, GreatDrinkAdmin)
