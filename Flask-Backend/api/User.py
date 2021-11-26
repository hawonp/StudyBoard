
from flask.json import jsonify
from google.oauth2 import id_token 
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields
from query.tag_query import get_user_tags
from query.user_query import get_user_by_id, update_user, get_users_order_by_rank
from query.login_query import verify_id_token
############################
#    CONSTANT URL PATH     #
############################
USERS = '/users'
USER_ID = '/<string:id>'
RANK = '/rank'

############################
#    Marshmallow Schema    #
############################
class UserInfoSchema(Schema):
    # id_token = fields.Str(re)
    user_nickname = fields.Str(required=True)
    user_tags = fields.List(fields.Str(), required=True)
    
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

    # TODO fix validation
    def put(self, id):
        #Validate params first    
        formData = request.get_json()["params"]
        # print(formData)
        # errors = UserInfoSchema.validate(formData)        
        # if errors:
        #     abort(400, str(errors))

        #Get the params
        user_nickname = formData['user_nickname']
        user_tags = formData['user_tags']
        print(request.args)

        res = update_user(id, user_nickname, user_tags)
        return res

class UsersByRank(Resource):
    def get(self):
        #Call function and return 10 
        data = get_users_order_by_rank()

        return json.dumps(data)

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)
    api.add_resource(UsersByRank, USERS+RANK)

user_info_schema = UserInfoSchema()