from django.db import models


class Card(models.Model):
    id = models.CharField(max_length=20, primary_key=True)
    balance = models.FloatField()


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    card = models.ForeignKey(
        Card,
        on_delete=models.DO_NOTHING,
        blank=True,
        null=True,
    )
