from config.db_connect import conn

from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.post_query import add_post, get_post_feed, get_post_by_id
from query.tag_query import get_post_tags

############################
#    CONSTANT URL PATH     #
############################
FEED = '/feed'
POSTS = '/posts'
POST_ID = '/<string:id>'

############################
#    Marshmallow Schema    #
############################
class FeedPostSchema(Schema):
    page = fields.Str(required=True)
    order = fields.Str(required=True)
    filter = fields.Str(required=True)

class PostCreateSchema(Schema):
    title = fields.Str(required=True)
    text = fields.Str(required=True)
    imageURL = fields.Str(required=True)
    tags = fields.Str(required=True)

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
        post_tags = get_post_tags(post["post_id"])
        tags = []
        for tag in post_tags:
            tags.append(tag[0])
        post["post_tags"] = tags

        return json.dumps(post, default=str)

    def put(self, id):
        pass

#Post creation TODO: NEEDS TO BE TESTED
class PostCreate(Resource):
    def post(self):
        #Validate params first
        errors = post_create_schema.validate(request.args)
        if errors:
            abort(400, str(errors))
        
        #Now fetch the params
        title = request.args.get('title')
        text = request.args.get('text')
        imageURL = request.args.get('iamgeURL')
        tags = request.args.get('tags')

        res = add_post(userid, title, text, imageURL, tags)
        return res

#Add routes to api
def init_routes(api):
    api.add_resource(FeedPostData, FEED+POSTS)
    api.add_resource(PostData, POSTS+POST_ID)
    api.add_resource(PostCreate, POSTS)

feed_post_schema = FeedPostSchema()
post_create_schema = PostCreateSchema()