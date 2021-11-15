from config.db_connect import conn

from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.post_query import add_post, get_post_feed, get_post_by_id, update_post
from query.post_query import add_user_like_post, delete_user_like_post, check_if_user_liked_post
from query.favourite_query import check_if_user_favourited_post, add_user_favourite_post, delete_user_favourite_post
from query.tag_query import get_post_tags

############################
#    CONSTANT URL PATH     #
############################
FEED = '/feed'
POSTS = '/posts'
POST_ID = '/<string:id>'
LIKES = '/likes'
FAVOURITE = '/favourite'

############################
#    Marshmallow Schema    #
############################
class FeedPostSchema(Schema):
    page = fields.Str(required=True)
    order = fields.Str(required=True)
    filter = fields.Str(required=True)

class PostDataSchema(Schema):
    userID = fields.Str(required=True)
    title = fields.Str(required=True)
    text = fields.Str(required=True)
    imageURL = fields.Str(required=True)
    tags = fields.List(fields.Str(), required=True)

class PostInteractorIDSchema(Schema):
    userID = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
#Post feed
class FeedPostData(Resource):
    def get(self):
        #Validate params first
        errors = feed_post_schema.validate(request.args)
        if errors:
            abort(400, str(errors))
        
        #Assuming all params have been validated.
        page = int(request.args.get('page'))
        order = request.args.get('order')
        filter = request.args.get('filter')

        #Get posts with given offset, sort order and tag filter
        feed = get_post_feed(page, "post_date", None)

        #For every post, get the tags and append it to the respective post object
        for post in feed['posts']:            
            #Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
            
        return json.dumps(feed, default=str)

#Post (detail) TODO: PUT is pass
class PostData(Resource):
    def get(self, id):
        #First get post
        post = get_post_by_id(id)

        #Now get the tags
        print("Getting post tags with retrieved post data:", post)
        post_tags = get_post_tags(post["post_id"])
        tags = []
        for tag in post_tags:
            tags.append(tag[0])
        post["post_tags"] = tags

        #Now check if the user liked the post
        viewer = request.args.get('userID')
        did_user_like_post = check_if_user_liked_post(viewer, post["post_id"])
        post["did_user_like_post"] = did_user_like_post

        #Now check if the user favourited the post
        did_user_favourite_post = check_if_user_favourited_post(viewer, post["post_id"])
        post["did_user_favourite_post"] = did_user_favourite_post

        return json.dumps(post, default=str)

    def put(self, id):
        #Validate params first
        formData = request.get_json()["params"]
        print(formData)
        errors = post_data_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        userID = formData["userID"]
        title = formData["title"]
        text = formData["text"]
        imageURL = formData["imageURL"]
        tags = formData["tags"]

        res = update_post(id, title, text, imageURL, tags)
        return res


#Post creation TODO: NEEDS TO BE TESTED
class PostCreate(Resource):
    def post(self):
        #Validate params first
        formData = request.get_json()["params"]
        errors = post_data_schema.validate(formData)
        if errors:
            abort(400, str(errors))
        
        #Now fetch the params
        userID = formData["userID"]
        title = formData["title"]
        text = formData["text"]
        imageURL = formData["imageURL"]
        tags = formData["tags"]

        res = add_post(userID, title, text, imageURL, tags)
        return res

#Post like
class PostLike(Resource):
    def post(self, id):
        #Validate params and assign variables
        formData = request.get_json()["params"]
        errors = post_interactor_id_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        user_id = formData["userID"]

        #Like
        user_id = formData["userID"]
        print("Adding user like to post")
        res = add_user_like_post(user_id, id)
        return res
    
    def delete(self, id):
        #Validate params and assign variables
        errors = post_interactor_id_schema.validate(request.args)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        user_id = request.args.get('userID')

        #Un-like
        print("Removing user like from post")
        res = delete_user_like_post(user_id, id)
        return res

#Add post to favourites
class PostFavourite(Resource):
    def post(self, id):
        #Validate params and assign variables
        formData = request.get_json()["params"]
        errors = post_interactor_id_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        user_id = formData["userID"]

        #fav
        user_id = formData["userID"]
        print("Adding user like to post")
        res = add_user_favourite_post(user_id, id)
        return res
    
    def delete(self, id):
        #Validate params and assign variables
        errors = post_interactor_id_schema.validate(request.args)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        user_id = request.args.get('userID')

        #Un-fav
        print("Removing user like from post")
        res = delete_user_favourite_post(user_id, id)
        return res

#Add routes to api
def init_routes(api):
    api.add_resource(FeedPostData, FEED+POSTS)
    api.add_resource(PostData, POSTS+POST_ID)
    api.add_resource(PostCreate, POSTS)
    api.add_resource(PostLike, POSTS+POST_ID+LIKES)
    api.add_resource(PostFavourite, POSTS+POST_ID+FAVOURITE)

feed_post_schema = FeedPostSchema()
post_data_schema = PostDataSchema()
post_interactor_id_schema = PostInteractorIDSchema()