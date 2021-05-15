from django.urls import path

from .views import OrderDetailView

urlpatterns = [
    path('<slug:slug>', OrderDetailView.as_view(), name='order_detail'),
]