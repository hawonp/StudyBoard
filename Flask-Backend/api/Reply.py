from config.db_connect import conn

from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.flag_query import flag_reply
from query.reply_query import get_replies_to_post, add_post_reply
############################
#    CONSTANT URL PATH     #
############################
POSTS = '/posts'
POST_ID = '/<int:id>'
REPLIES = '/replies'
REPLY_ID = '/<int:id>'
FLAG = '/flag'

############################
#    Marshmallow Schema    #
############################
class AddReplySchema(Schema):
    userID = fields.Str(required=True)
    text = fields.Str(required=True)

class ReplyFlagSchema(Schema):
    userID = fields.Str(required=True)
    text = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
class PostReply(Resource):
    def post(self, id):
        #Validate params first
        formData = request.get_json()["params"]
        print(formData)
        errors = add_reply_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))

        text = formData["text"]
        user_id = formData["userID"]

        res = add_post_reply(user_id, id, text)

        return json.dumps(res, default=str)


class PostReplies(Resource):
    def get(self, id):
        feed = get_replies_to_post(id)
        return json.dumps(feed, default=str)


#Add flag a post
class ReplyFlag(Resource):
    def post(self, id):
        #Validate params and assign variables
        formData = request.get_json()["params"]
        errors = reply_flag_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        
        #Fetch the params
        flag_text = formData["text"]
        user_id = formData["userID"]
        
        res = flag_reply(id, user_id, flag_text)
        return res

#Add routes to api
def init_routes(api):
    api.add_resource(PostReply, POSTS+POST_ID+REPLIES)
    api.add_resource(PostReplies, POSTS+POST_ID+REPLIES)
    api.add_resource(ReplyFlag, REPLIES+REPLY_ID+FLAG)

add_reply_schema = AddReplySchema()
reply_flag_schema = ReplyFlagSchema()