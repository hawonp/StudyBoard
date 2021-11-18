from config.db_connect import conn

from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.flag_query import flag_reply

############################
#    CONSTANT URL PATH     #
############################
REPLIES = '/replies'
REPLY_ID = '/<int:id>'
FLAG = '/flag'

############################
#    Marshmallow Schema    #
############################
class ReplyFlagSchema(Schema):
    userID = fields.Str(required=True)
    text = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
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
    api.add_resource(ReplyFlag, REPLIES+REPLY_ID+FAVOURITE)

reply_flag_schema = ReplyFlagSchema()