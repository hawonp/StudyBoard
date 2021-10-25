from django.shortcuts import render

# Create your views here.

# about page 어바웃 페이지
def about(request):
    return render(request, 'pageapp/about.html')

def contact(request):
    return render(request, 'pageapp/contact.html')

def leadership(request):
    return render(request, 'pageapp/leadership.html')

# 랭크 페이지
def rank(request):
    return render(request, 'pageapp/rank.html')

# 질문 페이지
def askquestion(request):
    return render(request, 'pageapp/askquestion.html')

# 질문 디테일
def questiondetail(request):
    return render(request, 'pageapp/questiondetail.html')

# 자기자신의 글쓴거
def post(request):
    return render(request, 'pageapp/post.html')

# 자기자신의 좋아하는 글 쓴거 
def favorite(request):
    return render(request, 'pageapp/favorite.html')

# 노티
def noti(request):
    return render(request, 'pageapp/noti.html')