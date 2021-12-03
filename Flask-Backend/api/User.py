
from flask.json import jsonify
from google.oauth2 import id_token 
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields, validate
from query.post_query import get_posts_by_user, check_if_user_liked_post
from query.favourite_query import get_favourited_post
from query.tag_query import get_user_tags, get_post_tags
from query.user_query import get_user_by_id, update_user, get_users_order_by_rank, delete_user
from query.login_query import verify_id_token
from query.notification_query import get_user_notifications, delete_all_notifications, delete_notification
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
    user_tags = fields.List(fields.Str(validate=validate.Length(min=1, max=32)), required=True)
    
############################
# Flask RESTful API routes #
############################
class UserInfo(Resource):
    def get(self, id):
        print("getting user information for profile card")
        user = get_user_by_id(id)
        tags = get_user_tags(id)
        data = {
            "user" : user,
            "tags" : tags
        }
        return json.dumps(data)

    # TODO: fix validation
    def put(self, id):
        #Validate params first    
        formData = request.get_json()["params"]
        print(formData)
        errors = user_info_schema.validate(formData)        
        if errors:
            abort(400, str(errors))

        #Get the params
        user_nickname = formData['user_nickname']
        user_tags = formData['user_tags']
        print(request.args)

        res = update_user(id, user_nickname, user_tags)
        return res

    def delete(self, id):

        res = delete_user(id)
        print("result of deleting user", res)
        return res

# delete user profile():
# set nickname to Account Deleted
# get rids of tags
# call Auth0 api

#Get favourite posts
class PostFavourites(Resource):
    def get(self, id):
        user_id = id

        posts = get_favourited_post(user_id)

        #For every post, get the tags and append it to the respective post object
        for post in posts:            
            #Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
        return json.dumps(posts, default=str)

#Post feed
class UserPosts(Resource):
    def get(self, id):
        #Get the list of user's posts
        posts = get_posts_by_user(id)

        #For every post, get the tags and append it to the respective post object
        for post in posts:            
            #Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
            
        return json.dumps(posts, default=str)


class UsersByRank(Resource):
    def get(self):
        #Call function and return 10 
        data = get_users_order_by_rank()

        if not data:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(data)

#Post feed
class UserNotifications(Resource):
    def get(self, id):
        #Get the list of user's posts
        notifs = get_user_notifications(id)
        
        if not notifs:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(notifs, default=str)
    def delete(self, id):
        #Delete all notifs
        res = delete_all_notifications(id)
        
        if not res:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(res)

#Post feed
class UserNotification(Resource):
    def delete(self, id, nid):
        #Delete all notifs
        res = delete_notification(nid)
        if not res:
            abort(500, "Oops. Something went wrong.")
        return json.dumps(res)


#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)
    api.add_resource(UsersByRank, USERS+RANK)
    api.add_resource(UserPosts, USERS+USER_ID+POSTS)
    api.add_resource(PostFavourites, USERS+USER_ID+FAVOURITE)
    api.add_resource(UserNotifications, USERS+USER_ID+NOTIFICATIONS)
    api.add_resource(UserNotification, USERS+USER_ID+NOTIFICATIONS+NOTIFICATION_ID)

user_info_schema = UserInfoSchema()