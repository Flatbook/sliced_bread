from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import CustomerForm
from .models import Customer


def index(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(str(form.instance.confirmation_id) + '/confirmation')

    form = CustomerForm()
    context = {'form': form}
    return render(request, 'greatest_beverage/landing_page.html', context)


def confirmation(request, confirmation_id):
    customer = Customer.objects.get(confirmation_id=confirmation_id)
    if customer.quantity ==None:
        customer.quantity = 1
    context = {'confirmation_id': confirmation_id,
               'name': customer.name,
               'quantity': customer.quantity,
               'city': customer.city,
               'province': customer.province,
               'country': customer.country
    }
    return render(request, 'greatest_beverage/confirmation.html', context)
