from config.db_connect import conn

from config.imports import json
from config.imports import Resource
from query.post_query import add_post, get_post_feed
from query.tag_query import get_post_tags

############################
# Flask RESTful API routes #
############################
class FeedPostData(Resource):
    def get(self):
        #Get posts with given offset, sort order and tag filter
        posts = get_post_feed(1, "post_date", None)

        #For every post, get the tags and append it to the respective post object
        for post in posts:
            post_tags = get_post_tags(post["post_id"])
            tags = []
            for tag in post_tags:
                tags.append(tag[0])
            post["post_tags"] = tags
            

        return json.dumps(posts, default=str)

#Add routes to api
def init_routes(api):
    api.add_resource(FeedPostData, '/posts')
