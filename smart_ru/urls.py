from django.contrib import admin
from django.urls import path
from polls import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", views.users),
    path("cards/", views.cards),
    path("user_register/", views.user_register),
    path("login/", views.login),
    path("card_register/", views.card_register),
    path("card_linking/", views.card_linking),
    path("payment/", views.pay),
    path("deposit/", views.deposit)
]
