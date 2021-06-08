from django.shortcuts import render, redirect
from .forms import OrderForm
from .models import Order

def index(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)

        if form.is_valid():
            order = Order(
                city=form.cleaned_data["city"],
                province=form.cleaned_data["province"],
                country=form.cleaned_data["country"],
            )
            if form.cleaned_data["customer"]:
                order.customer = form.cleaned_data["customer"]

            if form.cleaned_data["quantity"]:
                order.quantity = form.cleaned_data["quantity"]

            order.save()
            return redirect('beverage:confirmation', order.confirmation_number)
    else:
        form = OrderForm()

    return render(request, 'beverage/index.html', {'form': form})


def confirmation(request, confirmation_number):
    order = Order.objects.get(confirmation_number=confirmation_number)
    return render(request, 'beverage/confirmation.html', {'order': order})
