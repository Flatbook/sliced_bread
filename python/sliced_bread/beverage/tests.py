from django.test import TestCase
from .models import Order
from .forms import OrderForm

class OrderModelTests(TestCase):
    def test_default_customer_name(self):
        order = Order({'city': 'Halifax', 'province': 'Nova Scotia', 'country': 'Canada'})
        self.assertEqual(order.customer, 'Customer')

    def test_default_quantity(self):
        order = Order({'city': 'Halifax', 'province': 'Nova Scotia', 'country': 'Canada'})
        self.assertEqual(order.quantity, 1)


class OrderFormTests(TestCase):
    def test_form_invalid_when_missing_city(self):
        form = OrderForm({'province': 'Alberta', 'country': 'Canada'})
        self.assertFalse(form.is_valid())

    def test_form_invalid_when_missing_province(self):
        form = OrderForm({'city': 'Calgary', 'country': 'Canada'})
        self.assertFalse(form.is_valid())

    def test_form_invalid_when_missing_country(self):
        form = OrderForm({'city': 'Calgary', 'province': 'Alberta'})
        self.assertFalse(form.is_valid())

    def test_form_invalid_when_negative_quantity(self):
        form = OrderForm({'quantity': -2, 'city': 'Calgary', 'province': 'Alberta', 'country': 'Canada'})
        self.assertFalse(form.is_valid())
