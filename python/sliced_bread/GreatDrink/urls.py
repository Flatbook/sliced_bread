from .views import order_list, orderConfirmation
from django.urls import path

urlpatterns = [
    path('order/', order_list, name='order_list'),
    path('order/<str:orderNumber>', orderConfirmation, name='orderConfirmation'),
]
