from config.imports import Resource, abort, datetime
from config.imports import id_token, google_requests, cachecontrol, requests
from config.imports import request as req

from config.config import ApplicationConfig

from query.user_query import add_user, check_user_id_exists
from query.login_query import verify_id_token, get_user_from_id_token
class Default(Resource):
    def get(self):
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }
class Login(Resource):
    def get(self):
        print("add new user")
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

        return user_id
        # print("Save to Session")
        # session["user_id"] = user_id
        # print(session.get('user_id', None))
       
class Verify_ID_Token(Resource):
    def get(self):
        # get id_token from URL call
        token = request.args.get('id_token')
        print("BE: Received auth req from FE")
        
        # authenticate token_id from signin
        success = verify_id_token(token)
            
        print("Return ID_token back to frontend")
        if(success == False):
            abort(403)
        
def init_routes(api):
    api.add_resource(Default, '/')
    api.add_resource(Login, '/login')
    api.add_resource(Verify_ID_Token, '/verifyIDToken')

