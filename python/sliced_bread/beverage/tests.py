from django.test import TestCase
from django.urls import reverse
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

class IndexViewTests(TestCase):
    def test_loads_correct_template(self):
        response = self.client.get(reverse('beverage:index'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'beverage/index.html')

    def test_redirects_to_confirmation_on_success(self):
        form_data = {'city': 'Toronto', 'province': 'Ontario', 'country': 'Canada'}
        response = self.client.post(reverse('beverage:index'), form_data)
        new_order = Order.objects.get(city='Toronto', province='Ontario', country='Canada')
        self.assertRedirects(response, reverse('beverage:confirmation', args=[new_order.confirmation_number]))

    def test_form_error_when_missing_required_field(self):
        form_data = { 'province': 'BC', 'country': 'Canada'}
        response = self.client.post(reverse('beverage:index'), form_data)
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'city', 'This field is required.')


class ConfirmationViewTests(TestCase):
    def test_loads_correct_template(self):
        order = Order(customer='Harry', quantity='5', city='Toronto', province='Ontario', country='Canada')
        order.save()
        response = self.client.get(reverse('beverage:confirmation', args=[order.confirmation_number]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'beverage/confirmation.html')