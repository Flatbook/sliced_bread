from django.shortcuts import render
from django.views import View
from .models import OrderModel, unique_code_generator, name_generator
# Create your views here.

class Index(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'drink/index.html')

class Order(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'drink/order.html')

    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        city = request.POST.get('city')
        state = request.POST.get('state')
        country = request.POST.get('country')
        quantity = request.POST.get('quantity')

        if (name==''):
            name = name_generatior()

        if(quantity==''):
            quantity = 12

        code = unique_code_generator()
        slug = code

        order = OrderModel.objects.create(
            name=name,
            city=city,
            state=state,
            country=country,
            quantity=quantity,
            code=code,
            slug=slug,
        )

        context = {
            'quantity': quantity,
            'code': code,
            'name': name,
            'city': city,
            'state': state,
            'country': country,
        }

        return render(request, 'drink/order_confirmation.html', context)