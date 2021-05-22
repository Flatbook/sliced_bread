from django.test import TestCase
from .models import Order

class OrderModelTests(TestCase):
    def test_default_customer_name(self):
        order = Order({'city': 'Halifax', 'province': 'Nova Scotia', 'country': 'Canada'})
        self.assertEqual(order.customer, 'Customer')

    def test_default_quantity(self):
        order = Order({'city': 'Halifax', 'province': 'Nova Scotia', 'country': 'Canada'})
        self.assertEqual(order.quantity, 1)
