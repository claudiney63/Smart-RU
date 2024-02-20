from django.contrib import admin
from .models import User, Card


class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "card")
    list_filter = ("name",)
    search_fields = ("name", "email")


class CardAdmin(admin.ModelAdmin):
    list_display = ("id", "balance")
    list_filter = ("id",)
    search_fields = ("id",)


admin.site.register(User, UserAdmin)
admin.site.register(Card, CardAdmin)
