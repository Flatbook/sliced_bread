from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:confirmation_id>/confirmation/', views.confirmation, name='confirmation'),
]