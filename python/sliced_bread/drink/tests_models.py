from django.test import TestCase

from .models import OrderModel

class OrderModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        OrderModel.objects.create(code='FFFFFF', name='test-user', city='Vancouver', state='BC', country='Canada', quantity='5', slug='FFFFFF')

    def test_code_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('code').verbose_name
        self.assertEqual(field_label, 'code')

    def test_name_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')

    def test_city_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('city').verbose_name
        self.assertEqual(field_label, 'city')

    def test_state_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('state').verbose_name
        self.assertEqual(field_label, 'state')

    def test_country_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('country').verbose_name
        self.assertEqual(field_label, 'country')

    def test_quantity_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('quantity').verbose_name
        self.assertEqual(field_label, 'quantity')

    def test_slug_label(self):
        order = OrderModel.objects.get(id=1)
        field_label = order._meta.get_field('slug').verbose_name
        self.assertEqual(field_label, 'slug')

    def test_get_absolute_url(self):
        order = OrderModel.objects.get(id=1)
        self.assertEqual(order.get_absolute_url(), '/FFFFFF')