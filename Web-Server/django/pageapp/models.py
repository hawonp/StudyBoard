from django.db import models

# APP DATABASE TABLES

# USER
class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    user_nickname = models.CharField(max_length=16, null=True)
    user_is_endorsed = models.IntegerField(default=0)
    user_is_mod = models.IntegerField(default=0)
    user_flags_received = models.IntegerField(default=0)
    user_likes_received = models.IntegerField(default=0)
    class Meta:
        db_table = 'user'
    
# POST
class Post(models.Model):
    post_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=32, null=True)
    post_text = models.CharField(max_length=1024, null=True)
    post_like_count = models.IntegerField(default=0)
    post_reply_count = models.IntegerField(default=0)
    post_favourite_count = models.IntegerField(default=0)
    post_date = models.DateTimeField(null=True)
    class Meta:
        db_table = 'post'

class PostImage(models.Model):
    image_id = models.IntegerField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    image_url = models.CharField(max_length=256, null=True)

    class Meta:
        db_table = 'post_image'

class UserPostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_post_like'
        unique_together = (('user_id', 'post_id'),)

class PostReport(models.Model):
    report_id = models.IntegerField(primary_key=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey('User', models.DO_NOTHING, null=True) #TODO: CHECK AGAIN
    report_text = models.CharField(max_length=256, null=True)
    report_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'post_report'

# TAGS
class Tag(models.Model):
    tag_id = models.IntegerField(primary_key=True)
    tag_name = models.CharField(max_length=32)

    class Meta:
        db_table = 'tag'

class PostTag(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        db_table = 'post_tag'
        unique_together = (('tag_id', 'post_id'),)

class UserTag(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_tag'
        unique_together = (('tag_id', 'user_id'),)

# REPLY
class Reply(models.Model):
    reply_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    reply_text = models.CharField(max_length=512)
    reply_like_count = models.IntegerField(default=0)
    reply_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'reply'

class ReplyToPost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)

    class Meta:
        db_table = 'reply_to_post'
        unique_together = (('post_id', 'reply_id'),)


class ReplyToReply(models.Model):
    source = models.ForeignKey(Reply, on_delete=models.CASCADE, related_name='source')
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE, related_name='replier')

    class Meta:
        db_table = 'reply_to_reply'
        unique_together = (('source_id', 'reply_id'),)

class UserReplyLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_reply_like'
        unique_together = (('user_id', 'reply_id'),)

class ReplyReport(models.Model):
    report_id = models.IntegerField(primary_key=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.DO_NOTHING)
    report_text = models.CharField(max_length=256, null=True)
    report_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'reply_report'

#BLACKLISTED USERS
class BlacklistedUser(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE, primary_key=True)
    class Meta:
        db_table = 'blacklisted_user'

#FAVOURITE QUESTION
class FavouriteQuestion(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    class Meta:
        unique_together = (('post_id', 'user_id'),)

# NOTIFICATION
class Notification(models.Model):
    notification_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    notification_text = models.CharField(max_length=128)
    notification_date = models.DateTimeField(null=True)
    notification_seen = models.IntegerField(default=0)
    class Meta:
        db_table = 'notification'

# SEARCH HISTORY
class SearchHistory(models.Model):
    search_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    search_text = models.CharField(max_length=128)
    search_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'search_history'