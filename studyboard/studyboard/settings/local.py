from .base import *


SECRET_KEY = get_secret("SECRET_KEY")

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-(##ibs3_8wm(zoazhe$9bchql+2v&5l&&&yfp)8t1n!2ycfuan'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}