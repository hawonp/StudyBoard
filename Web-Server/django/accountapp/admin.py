from django.contrib import admin
# from rangefilter.filter import
# Register your models here.

from pageapp.models import User

class DisplayUser(admin.ModelAdmin):
    list_display = ('user_id', 'user_nickname', 'user_is_endorsed', 'user_is_mod',
                    'user_flags_received', 'user_likes_received')
    search_fields = ['user_id']
    readonly_fields = ['user_id', 'user_nickname']


admin.site.register(User,DisplayUser)