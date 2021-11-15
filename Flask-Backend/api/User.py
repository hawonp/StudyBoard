
from flask.json import jsonify
from config.db_connect import conn
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields
from query.tag_query import get_user_tags
from query.user_query import get_user_by_id
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
    nickname = fields.Str(required=True)
    tags = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
class UserInfo(Resource):
    def get(self, id):
        
        token = request.args.get('id_token')
        success, unused = verify_id_token(token)
        print("USER: verifying user token", success, token)
        if(success):
            user = get_user_by_id(id)
            tags = get_user_tags(id)
            data = {
                "user" : user,
                "tags" : tags
            }
            return json.dumps(data)
        else:
            abort(403)
    # def put(self, id): #TODO: NEEDS TO BE TESTED
    #     #Validate params first    
    #     errors = user_info_schema.validate(request.args)
    #     if errors:
    #         abort(400, str(errors))

    #     #Get the params
    #     user_nickname = request.args.get('nickname')
    #     print(request.args)

    #     #Update user nickname
    #     if not (update_user_nickname(id, user_nickname)):
    #         abort(500, str("An internal error occured"))

    #     return json.dumps(user)

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)

user_info_schema = UserInfoSchema()