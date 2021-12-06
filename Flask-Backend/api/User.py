
from config.imports import (Resource, Schema, abort, fields, json, mariadb,
                            request, validate)
from flask.json import jsonify
from query.favourite_query import get_favourited_post
from query.notification_query import (delete_all_notifications,
                                      delete_notification,
                                      get_user_notifications)
from query.post_query import get_posts_by_user
from query.tag_query import get_post_tags, get_user_tags
from query.user_query import (delete_user, get_user_by_id,
                              get_users_order_by_rank, update_user)

############################
#    CONSTANT URL PATH     #
############################
POSTS = '/posts'
USERS = '/users'
USER_ID = '/<string:id>'
RANK = '/rank'
FAVOURITE = '/favourite'
NOTIFICATIONS = '/notifications'
NOTIFICATION_ID = '/<int:nid>'

############################
#    Marshmallow Schema    #
############################


class UserInfoSchema(Schema):
    # id_token = fields.Str(re)
    user_nickname = fields.Str(required=True, validate=validate.Length(min=1, max=16))
    user_tags = fields.List(fields.Str(), required=True)

############################
# Flask RESTful API routes #
############################

# User's profile information


class UserInfo(Resource):
    def get(self, id):
        print("getting user information for profile card")
        user = get_user_by_id(id)
        tags = get_user_tags(id)
        data = {
            "user": user,
            "tags": tags
        }
        return json.dumps(data)

    def put(self, id):
        # Validate params first
        formData = request.get_json()["params"]
        errors = user_info_schema.validate(formData)
        if errors:
            abort(400, str(errors))

        # Get the params
        user_nickname = formData['user_nickname']
        user_tags = formData['user_tags']

        res = update_user(id, user_nickname, user_tags)
        return res

    def delete(self, id):

        res = delete_user(id)
        print("result of deleting user", res)
        return res

# List of favourite posts of a user


class PostFavourites(Resource):
    def get(self, id):
        user_id = id
        posts = get_favourited_post(user_id)

        if posts == 0:
            abort(500)

        # For every post, get the tags and append it to the respective post object
        for post in posts:
            # Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
        return json.dumps(posts, default=str)

# List of user's posts


class UserPosts(Resource):
    def get(self, id):
        # Get the list of user's posts
        posts = get_posts_by_user(id)

        if posts == 0:
            abort(500)

        # For every post, get the tags and append it to the respective post object
        for post in posts:
            # Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags

        return json.dumps(posts, default=str)

# Getting data for rank page


class UsersByRank(Resource):
    def get(self):
        # Call function and return 10
        data = get_users_order_by_rank()

        return json.dumps(data)

# For all notifications


class UserNotifications(Resource):
    def get(self, id):
        # Get the list of user's posts
        notifs = get_user_notifications(id)

        return json.dumps(notifs, default=str)

    def delete(self, id):
        # Delete all notifs
        res = delete_all_notifications(id)

        if res == 0:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(res)

# For each notification


class UserNotification(Resource):
    def delete(self, id, nid):
        # Delete all notifs
        res = delete_notification(nid)
        if res == 0:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(res)


# Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)
    api.add_resource(UsersByRank, USERS+RANK)
    api.add_resource(UserPosts, USERS+USER_ID+POSTS)
    api.add_resource(PostFavourites, USERS+USER_ID+FAVOURITE)
    api.add_resource(UserNotifications, USERS+USER_ID+NOTIFICATIONS)
    api.add_resource(UserNotification, USERS+USER_ID+NOTIFICATIONS+NOTIFICATION_ID)


user_info_schema = UserInfoSchema()
