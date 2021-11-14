from config.imports import Resource, request
from config.imports import id_token, requests
from config.auth import GOOGLE_CLIENT_ID
import datetime
from query.user_query import add_user, check_user_id_exists

class Default(Resource):
    def get(self):
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }
class VerifyToken(Resource):
    def get(self):
        #Assuming all params have been validated.
        token = request.args.get('token')
        print(token)
        print(datetime.datetime.now())
        try:
            # authenticate token_id from signin
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
            
            # get logged in users info
            user_id = idinfo['sub']
            user_email = idinfo['email']
            user_nickname = idinfo['name']
            print(user_id, user_email, user_nickname) 
            print(idinfo)
            # check if user already exists in the database
            res = check_user_id_exists(user_id)
            
            # add user to database if doesn't exist
            if res[0] != 1:
                add_user(user_id, user_nickname, user_email)

            return user_id
            
        except ValueError as e:
            print(e)

def init_routes(api):
    api.add_resource(Default, '/')
    api.add_resource(VerifyToken, '/verify')
