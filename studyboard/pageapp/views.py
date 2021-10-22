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

def questiondetail(request):
    return render(request, 'pageapp/questiondetail.html')

def post(request):
    return render(request, 'pageapp/post.html')

def favorite(request):
    return render(request, 'pageapp/favorite.html')