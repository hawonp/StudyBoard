from config.imports import id_token, datetime, requests
from config.config import ApplicationConfig

def verify_id_token(token):
    print("Verifying ID Token, Current Time: " + str(datetime.datetime.now()))

    try: 
        decoded_token = id_token.verify_oauth2_token(token, requests.Request(), ApplicationConfig.GOOGLE_CLIENT_ID)
        print("Token is verified!\n",decoded_token)
        return True, decoded_token

    except ValueError as e:
        print("Could not verify ID token")
        return False, ""

# assumption is that idinfo is already verified
def get_user_from_id_token(decoded_token):
    # get logged in users info
    user_id = decoded_token['sub']
    user_email = decoded_token['email']
    user_name = decoded_token['name']

    print("Current User: ", user_id, user_email, user_name)
    return user_id, user_email, user_name

def get_verified_user_id(token):
    success, decoded_token = verify_id_token(token)

    if(success == True):
        return decoded_token['sub']
    else:
        return False
    