from django.shortcuts import render

# Create your views here.


def about(request):
    return render(request, 'pageapp/about.html')


def contact(request):
    return render(request, 'pageapp/contact.html')


def leadership(request):
    return render(request, 'pageapp/leadership.html')


def rank(request):
    return render(request, 'pageapp/rank.html')


def askquestion(request):
    return render(request, 'pageapp/askquestion.html')