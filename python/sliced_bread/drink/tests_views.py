from django.test import TestCase
from django.urls import reverse

from .models import OrderModel

class IndexViewTest(TestCase):
    def test_view_url_exists_at_deseired_location(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_uses_correct_template(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'drink/index.html')

class OrderViewTest(TestCase):
    def test_view_url_exists_at_deseired_location(self):
        response = self.client.get('/order/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_uses_correct_template(self):
        response = self.client.get('/order/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'drink/order.html')
        