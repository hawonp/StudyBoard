
from config.db_connect import conn
from config.imports import mariadb, json, Resource

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
    id = fields.Str(required=True)
    nickname = fields.Str(required=True)
    tags = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################
class UserInfo(Resource):
    def get(self, id):
        user = get_user_by_id(id)
        return json.dumps(users)

    def put(self):
        
        return json.dumps(user)

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, USERS+USER_ID)