
from config.db_connect import conn
from config.imports import mariadb
from config.imports import json
from config.imports import Resource

from query.user_query import add_user, get_user_by_id, get_users
############################
# Flask RESTful API routes #
############################
class UserInfo(Resource):
    def get(self):
        users = get_users()
        return json.dumps(users)

#Add routes to api
def init_routes(api):
    api.add_resource(UserInfo, '/user')