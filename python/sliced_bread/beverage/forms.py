from django import forms
from django.core.exceptions import ValidationError
from django.forms.fields import CharField, IntegerField

class OrderForm(forms.Form):
    customer = CharField(max_length=50, required=False, label='Name')
    quantity = IntegerField(required=False)
    city = CharField(max_length=50)
    province = CharField(max_length=50, label='State/Province')
    country = CharField(max_length=50)

    def clean_quantity(self):
        quantity = self.cleaned_data['quantity']

        if quantity and quantity < 1:
            raise ValidationError('Quantity must be greater than 0.')

        return quantity
