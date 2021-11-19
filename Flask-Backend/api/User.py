
from flask.json import jsonify
from google.oauth2 import id_token
from config.db_connect import conn
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields
from query.tag_query import get_user_tags
from query.user_query import get_user_by_id, update_user
from query.login_query import verify_id_token
############################
#    CONSTANT URL PATH     #
############################
USERS = '/users'
USER_ID = '/<string:id>'

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
        
        token = request.args.get('id_token')
        verify_id_token(token)
        print("USER: verifying user token: ", token)
        user = get_user_by_id(id)
        tags = get_user_tags(id)
        data = {
            "user" : user,
            "tags" : tags
        }
        return json.dumps(data)

    # TODO fix validation
    def put(self, id): #TODO: NEEDS TO BE TESTED
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

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)

user_info_schema = UserInfoSchema()