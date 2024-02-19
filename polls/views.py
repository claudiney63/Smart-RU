from django.http import HttpResponse
from .models import User, Card
import json


def users(request):
    users = User.objects.all()
    response = [
        {
            "name": user.name,
            "email": user.email,
            "card_id": user.card.id if user.card else None,
        }
        for user in users
    ]
    return HttpResponse(json.dumps(response), content_type="application/json")


def user(request, email):
    user = User.objects.get(email=email)
    response = {
        "name": user.name,
        "email": user.email,
        "card_id": user.card.id if user.card else None,
    }
    return HttpResponse(json.dumps(response), content_type="application/json")


def cards(request):
    cards = Card.objects.all()
    response = [{"id": card.id, "balance": card.balance} for card in cards]
    return HttpResponse(json.dumps(response), content_type="application/json")


def card(request, card_id):
    card = Card.objects.get(id=card_id)
    response = {
        "id": card.id,
        "balance": card.balance,
    }
    return HttpResponse(json.dumps(response), content_type="application/json")


def user_register(request):
    body = json.loads(request.body.decode("utf-8"))
    name = body["name"]
    email = body["email"]
    password = body["password"]

    print(name, email, password)
    if User.objects.filter(email=email):
        return HttpResponse(status=422)
    else:
        User.objects.create(
            name=name,
            email=email,
            password=password,
        ).save()
        return HttpResponse()


def card_register(request):
    body = json.loads(request.body.decode("utf-8"))
    card_id = body["id"]
    if Card.objects.filter(id=card_id):
        return HttpResponse(status=422)
    else:
        Card.objects.create(id=card_id, balance=0).save()
        return HttpResponse()


def login(request):
    body = json.loads(request.body.decode("utf-8"))
    email = body["email"]
    password = body["password"]

    if not User.objects.filter(email=email):
        return HttpResponse(status=404)
    elif not User.objects.get(email=email).password == password:
        return HttpResponse(status=401)
    else:
        return HttpResponse()


def card_linking(request):
    body = json.loads(request.body.decode("utf-8"))
    email = body["email"]
    card_id = body["card_id"]

    if (not User.objects.filter(email=email)) or (not Card.objects.filter(id=card_id)):
        return HttpResponse(status=404)
    else:
        user = User.objects.get(email=email)
        user.card = Card.objects.get(id=card_id)
        user.save()
        return HttpResponse()


def pay(request):
    body = json.loads(request.body.decode("utf-8"))
    card_id = body["card_id"]
    amount = body["amount"]
    if not Card.objects.filter(id=card_id):
        return HttpResponse(status=404)
    elif Card.objects.get(id=card_id).balance < amount:
        return HttpResponse(status=402)
    else:
        card = Card.objects.get(id=card_id)
        print(amount)
        card.balance = card.balance - amount
        print(card.balance)
        card.save()
        return HttpResponse()


def deposit(request):
    body = json.loads(request.body.decode("utf-8"))
    card_id = body["card_id"]
    amount = body["amount"]
    if not Card.objects.filter(id=card_id):
        return HttpResponse(status=404)
    else:
        card = Card.objects.get(id=card_id)
        card.balance += amount
        card.save()
        return HttpResponse()
