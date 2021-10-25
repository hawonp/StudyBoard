# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and ForeignKey has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

# APP DATABASE TABLES

# USER
class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    user_nickname = models.CharField(max_length=16, blank=True, null=True)
    user_is_endorsed = models.IntegerField(blank=True, null=True)
    user_is_mod = models.IntegerField(blank=True, null=True)
    user_flags_received = models.IntegerField(blank=True, null=True)
    user_likes_received = models.IntegerField(blank=True, null=True)
    class Meta:
        db_table = 'user'
    
# POST
class Post(models.Model):
    post_id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField()
    post_title = models.CharField(max_length=32, blank=True, null=True)
    post_text = models.CharField(max_length=1024, blank=True, null=True)
    post_like_count = models.IntegerField(blank=True, null=True)
    post_reply_count = models.IntegerField(blank=True, null=True)
    post_favourite_count = models.IntegerField(blank=True, null=True)
    post_date = models.DateTimeField(blank=True, null=True)
    class Meta:
        db_table = 'post'

class PostImage(models.Model):
    image_id = models.IntegerField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    image_url = models.CharField(max_length=256, blank=True, null=True)

    class Meta:
        db_table = 'post_image'

class UserPostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_post_like'
        unique_together = (('user', 'post'),)

class PostReport(models.Model):
    report_id = models.IntegerField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True) #TODO: CHECK AGAIN
    report_text = models.CharField(max_length=256, blank=True, null=True)
    report_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'post_report'

# TAGS
class Tag(models.Model):
    tag_id = models.IntegerField(primary_key=True)
    tag_name = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        db_table = 'tag'

class PostTag(models.Model):
    tag_id = models.IntegerField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_tag'
        unique_together = (('tag_id', 'post'),)

class UserTag(models.Model):
    tag_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_tag'
        unique_together = (('tag_id', 'user'),)

# REPLY
class Reply(models.Model):
    reply_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    reply_text = models.CharField(max_length=512, blank=True, null=True)
    reply_like_count = models.IntegerField(blank=True, null=True)
    reply_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'reply'

class ReplyToPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, primary_key=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)

    class Meta:
        db_table = 'reply_to_post'
        unique_together = (('post', 'reply'),)


class ReplyToReply(models.Model):
    source = models.ForeignKey(Reply, on_delete=models.CASCADE, primary_key=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)

    class Meta:
        db_table = 'reply_to_reply'
        unique_together = (('source', 'reply'),)

class UserReplyLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_reply_like'
        unique_together = (('user', 'reply'),)

class ReplyReport(models.Model):
    report_id = models.IntegerField(primary_key=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    report_text = models.CharField(max_length=256, blank=True, null=True)
    report_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'reply_report'

#BLACKLISTED USERS
class BlacklistedUser(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, primary_key=True)
    class Meta:
        db_table = 'blacklisted_user'

#FAVOURITE QUESTION
class FavouriteQuestion(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    class Meta:
        unique_together = (('post', 'user'),)

# NOTIFICATION
class Notification(models.Model):
    notification_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    notification_text = models.CharField(max_length=128, blank=True, null=True)
    notification_date = models.DateTimeField(blank=True, null=True)
    notification_seen = models.IntegerField(blank=True, null=True)
    class Meta:
        db_table = 'notification'

# SEARCH HISTORY
class SearchHistory(models.Model):
    search_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    search_text = models.CharField(max_length=128, blank=True, null=True)
    search_date = models.DateTimeField(blank=True, null=True)
    class Meta:
        db_table = 'search_history'