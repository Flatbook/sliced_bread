from django.test import TestCase
from django.http import HttpRequest
from .models import Customer
from .forms import CustomerForm


class TestCustomerForm(TestCase):
    def test_empty_form(self):
        form = CustomerForm()
        self.assertIn("name", form.fields)
        self.assertIn("quantity", form.fields)
        self.assertIn("city", form.fields)
        self.assertIn("province", form.fields)
        self.assertIn("country", form.fields)

    def test_empty_name(self):
        request = HttpRequest()
        request.POST = {
            "name":"",
            "quantity":1,
            "city":"Toronto",
            "province":"ON",
            "country":"Canada"
        }

        form = CustomerForm(request.POST)
        form.save()
        self.assertEqual(Customer.objects.count(), 1)

    def test_empty_city(self):
        request = HttpRequest()
        request.POST = {
            "name":"Saumil",
            "quantity":1,
            "city":"",
            "province":"ON",
            "country":"Canada"
        }

        form = CustomerForm(request.POST)
        form.save()
        self.assertEqual(Customer.objects.count(), 0)


