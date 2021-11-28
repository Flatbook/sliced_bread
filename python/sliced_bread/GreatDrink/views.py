import json
from django.shortcuts import render
from rest_framework import viewsets, routers
from rest_framework.parsers import JSONParser
from django.http import  JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

from .serializers import GreatDrinkSerializer
from .models import Order

# Create your views here.

class GreatDrinkView(viewsets.ModelViewSet):
    serializer_class = GreatDrinkSerializer
    queryset = Order.objects.all()

@csrf_exempt
def order_list(request):
    print(request.method)
    if request.method == 'GET':
        orders = Order.objects.all()
        serializer = GreatDrinkSerializer(orders, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = GreatDrinkSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def orderConfirmation(request, orderNumber):
    print(orderNumber)
    if request.method == 'GET':
        orderQuery = Order.objects.filter(orderNumber=orderNumber)
        if orderQuery.none():
            return JsonResponse({'status':'false','message':''} ,status=400)
        order = json.loads(serializers.serialize('json', orderQuery))[0]['fields']
        return JsonResponse(order, safe=False)