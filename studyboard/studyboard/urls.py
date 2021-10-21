"""studyboard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include


import accountapp.views
import pageapp.views

urlpatterns = [

    path('', accountapp.views.homepage, name='homepage'),
    path('admin/', admin.site.urls),
    path('accounts/', include('accountapp.urls')),
    path('page/', include('pageapp.urls')),

    url(r'^homepage', accountapp.views.homepage, name='homepage'),
    url(r'^about', pageapp.views.about, name='about'),
    url(r'^leadership', pageapp.views.leadership, name='leadership'),
    url(r'^contact', pageapp.views.contact, name='contact'),
    url(r'^askquestion', pageapp.views.askquestion, name='askquestion'),
    url(r'^rank', pageapp.views.rank, name='rank'),
    url(r'^questiondetail', pageapp.views.questiondetail, name='questiondetail'),

]