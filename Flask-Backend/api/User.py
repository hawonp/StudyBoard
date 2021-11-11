
from config.db_connect import conn
from config.imports import mariadb, json, Resource, request, abort
from config.imports import Schema, fields

from query.user_query import add_user, get_user_by_id, get_users

############################
#    CONSTANT URL PATH     #
############################
USERS = '/users'
USER_ID = '/<string:id>'

############################
#    Marshmallow Schema    #
############################
class FeedPostSchema(Schema):
    nickname = fields.Str(required=True)
    tags = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
class UserInfo(Resource):
    def get(self, id):
        user = get_user_by_id(id)
        return json.dumps(users)

    def put(self, id):
        user_id = id
        user_nickname = request.args.get('nickname')
        return json.dumps(user)

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)