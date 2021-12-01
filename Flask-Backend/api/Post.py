import re
from config.imports import json, Resource, request, abort, requests
from config.imports import Schema, fields
from query.post_query import add_user_like_post, delete_user_like_post, check_if_user_liked_post, search_posts, add_post, get_post_by_id, update_post, delete_post
from query.post_query import get_post_feed, get_post_feed_with_filter, get_posts_by_tag_name,search_tags, get_search_results_tags, get_search_results_posts
from query.favourite_query import check_if_user_favourited_post, add_user_favourite_post, delete_user_favourite_post
from query.tag_query import get_post_tags, get_user_tag_ids
from config.config import ApplicationConfig
from query.flag_query import flag_post


############################
#    CONSTANT URL PATH     #
############################
FEED = '/feed'
POSTS = '/posts'
POST_ID = '/<int:id>'
LIKES = '/likes'
FAVOURITE = '/favourite'
WRITE = '/write'
FLAG = '/flag'
TAGS = '/tags'
SEARCH = '/search'
PREVIEW = '/preview'
QUERY = '/query'

############################
#    Marshmallow Schema    #
############################
class FeedPostSchema(Schema):
    userID = fields.Str(required=True)
    page = fields.Int(required=True)
    order = fields.Int(required=True)
    filter = fields.Int(required=True)

class PostDataSchema(Schema):
    userID = fields.Str(required=True)
    title = fields.Str(required=True)
    text = fields.Str(required=True)
    imageURL = fields.Str(required=True)
    tags = fields.List(fields.Str())
    uuid = fields.Str(required=False)

class PostInteractorIDSchema(Schema):
    userID = fields.Str(required=True)

class PostFlagSchema(Schema):
    userID = fields.Str(required=True)
    text = fields.Str(required=True)

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
        user_id = request.args.get('userID')
        page = int(request.args.get('page'))
        order = int(request.args.get('order'))
        filter = int(request.args.get('filter'))

        #Get posts with given offset, sort order and tag filter
        if filter:
            print(user_id)
            filter = get_user_tag_ids(user_id)
            if len(filter) == 0:
                feed = get_post_feed(page, order)
            else:
                # feed = get_post_feed(page, order)
                feed = get_post_feed_with_filter(page, order, filter)
            
        else:
            feed = get_post_feed(page, order)

        #For every post, get the tags and append it to the respective post object
        for post in feed['posts']:            
            #Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
            
        return json.dumps(feed, default=str)

#Post (detail) TODO: 
class PostData(Resource):
    def get(self, id):
        #First get post
        post = get_post_by_id(id)

        #Now get the tags
        print("Getting post tags with retrieved post data:", post)
        print("post id:", post["post_id"])
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
        print("formdata", formData)
        errors = post_data_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        title = formData["title"]
        text = formData["text"]
        image_url = formData["imageURL"]
        tags = formData["tags"]

        res = update_post(id, title, text, image_url, tags)
        return res

    def delete(self, id):
        #First get post
        post = get_post_by_id(id)

        #Delete the post
        res = delete_post(id)
        return json.dumps(res)


#Post creation TODO: NEEDS TO BE TESTED
class PostWrite(Resource):
    def post(self):
        print("validate inputs")
        #Validate params first
        formData = request.get_json()["params"]
        errors = post_data_schema.validate(formData)
        if errors:
            abort(400, str(errors))
        
        #Now fetch the params
        user_id = formData["userID"]
        title = formData["title"]
        text = formData["text"]
        image_url = formData["imageURL"]
        tags = formData["tags"]
        if image_url != "None":
            uuid = formData["uuid"]

            print("store image permanently")
            auth = "Uploadcare.Simple" + ApplicationConfig.PUBLIC_KEY + ":" + ApplicationConfig.IMG_SECRET_KEY
            headers = {'Accept': 'application/vnd.uploadcare-v0.5+json', 'Authorization': auth}
            api_call = "https://api.uploadcare.com/files/" + uuid + "/storage/"
            payload = {'UPLOADCARE_STORE ': '1'}
            response = requests.put(api_call, params=payload, headers=headers)
            print("permanently storing image: ", response)

        res = add_post(user_id, title, text, image_url, tags)
        return res

#Post Search
class SearchPreview(Resource):
    def get(self):
        print("Querying search result")
        input = request.args.get('input')

        post_list = search_posts(input)
        tag_list = search_tags(input)

        print(post_list + tag_list)
        return post_list + tag_list

class SearchQuery(Resource):
    def get(self):
        input = request.args.get('input')
        
        post_json = get_search_results_posts(input)
        tag_json = get_search_results_tags(input)

        # result_list.append(post_json)
        result_json = {
            "tags" : tag_json,
            "posts" : post_json
        }
 

        print("Search Result", result_json)
        return json.dumps(result_json)


 # get posts by tag_id
class PostTag(Resource):
    def get(self):
        # formData = request.get_json()["params"]
        # tag_id = formData["tagID"]
        tag_name = request.args.get('tagName')
        print("tag name", tag_name)
        posts = get_posts_by_tag_name(tag_name)
        #For every post, get the tags and append it to the respective post object
        for post in posts:            
            #Finding and adding related tags to each post
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
            
        return json.dumps(posts, default=str)       

#Post like
class PostLike(Resource):
    def post(self, id):
        #Validate params and assign variables
        formData = request.get_json()["params"]
        errors = post_interactor_id_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))

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
        print("Adding post to favourites")
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
        print("Removing post from favourites")
        res = delete_user_favourite_post(user_id, id)
        return res

#Add flag a post
class PostFlag(Resource):
    def post(self, id):
        #Validate params and assign variables
        formData = request.get_json()["params"]
        errors = post_flag_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        
        #Fetch the params
        flag_text = formData["text"]
        user_id = formData["userID"]
        
        res = flag_post(id, user_id, flag_text)
        return res

#Add routes to api
def init_routes(api):
    api.add_resource(FeedPostData, FEED+POSTS)
    api.add_resource(PostData, POSTS+POST_ID)
    api.add_resource(PostWrite, POSTS+WRITE)
    api.add_resource(PostLike, POSTS+POST_ID+LIKES)
    api.add_resource(PostFavourite, POSTS+POST_ID+FAVOURITE)
    api.add_resource(PostFlag, POSTS+POST_ID+FLAG)
    api.add_resource(PostTag, FEED + POSTS + TAGS)
    api.add_resource(SearchPreview, SEARCH + PREVIEW)
    api.add_resource(SearchQuery, SEARCH + QUERY)



feed_post_schema = FeedPostSchema()
post_data_schema = PostDataSchema()
post_interactor_id_schema = PostInteractorIDSchema()
post_flag_schema = PostFlagSchema()