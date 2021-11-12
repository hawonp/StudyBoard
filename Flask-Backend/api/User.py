
from config.db_connect import conn
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields

from query.user_query import add_user, get_user_by_id, get_users, update_user_nickname

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
        user = get_user_by_id(id)
        return json.dumps(user)
    
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