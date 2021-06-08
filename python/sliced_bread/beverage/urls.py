from django.urls import path
from . import views

app_name = 'beverage'
urlpatterns = [
    path('', views.index, name='index'),
    path('<uuid:confirmation_number>/confirmation/', views.confirmation, name='confirmation'),
]