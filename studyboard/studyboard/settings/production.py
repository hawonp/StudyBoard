from .base import *
import os, json
from django.core.exceptions import ImproperlyConfigured

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
SECRET_KEY = get_secret("SECRET_KEY")

ALLOWED_HOSTS = ['studyboard.info', 'www.studyboard.info']

