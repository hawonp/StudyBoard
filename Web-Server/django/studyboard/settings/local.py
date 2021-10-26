from .base import *

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '0.0.0.0']

SECRET_KEY = get_secret("SECRET_KEY")

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-(##ibs3_8wm(zoazhe$9bchql+2v&5l&&&yfp)8t1n!2ycfuan'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'studyboard_db',
        'USER': 'mod',
        'PASSWORD': 'studyboard2021',
        # 'HOST': 'localhost',
        'HOST' : '141.164.51.144',
        'port' : '3306'
    }
}