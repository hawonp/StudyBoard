from config.imports import Resource, abort, datetime
from config.imports import id_token, google_requests, cachecontrol, requests
from config.imports import request as req
from config.imports import Schema, fields, validate
from config.config import ApplicationConfig

from query.user_query import add_user, check_user_id_exists
from query.login_query import verify_id_token, get_user_from_id_token

############################
#    Marshmallow Schema    #
############################
class UserDataSchema(Schema):
    user_id = fields.Str(required=True)
    user_nickname = fields.Str(required=True, validate=validate.Length(min=1, max=16))
    user_email = fields.Str(required=True, validate=validate.Length(min=1, max=32))

class UserIDVerifySchema(Schema):
    user_id = fields.Str(required=True)

############################
# Flask RESTful API routes #
############################

class Default(Resource):
    def get(self):
        return {
            'Backend': ['Connected']
        }
class Login(Resource):
    def get(self):
        #Validate the params
        errors = user_data_schema.validate(req.args)
        if errors:
            abort(400, str(errors))
        
        # get id_token from URL call
        user_id = req.args.get('user_id')
        user_nickname = req.args.get('user_nickname')
        user_email = req.args.get('user_email')

        # check if user already exists in the database
        res = check_user_id_exists(user_id)
        print("Check if User Exists in DB: ", res[0])
            
        # add user to database if doesn't exist
        if res[0] != 1:
            print("Add Current user to DB")
            add_user(user_id, user_nickname, user_email)
        else:
            print("User already exists | user_id:", user_id)
        return user_id
       
def init_routes(api):
    api.add_resource(Default, '/')
    api.add_resource(Login, '/login')

user_data_schema = UserDataSchema()
user_id_verify_schema = UserIDVerifySchema()