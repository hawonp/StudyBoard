from config.db_connect import conn

from config.imports import json
from config.imports import Resource
from query.post_query import add_post, get_post_feed

############################
# Flask RESTful API routes #
############################
class FeedPostData(Resource):
    def get(self):
        posts = get_post_feed(1, "post_date", None)
        print(posts)

        return json.dumps(posts, default=str)

#Add routes to api
def init_routes(api):
    api.add_resource(FeedPostData, '/posts')
