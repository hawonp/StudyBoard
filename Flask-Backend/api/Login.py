from flask.helpers import get_flashed_messages
from config.imports import json
from config.imports import Resource
from config.imports import google
from config.imports import redirect, url_for
from config.imports import oauth_authorized
from config.imports import Flask
from config.imports import session
from config.imports import oauthlib
from oauthlib.oauth2.rfc6749.errors import InvalidClientIdError, TokenExpiredError
from config.imports import sys
from config.imports import oauth_authorized
from config.imports import flash
import config.URL as URL

from query.user_query import add_user, check_user_id_exists

local_redirect_url = URL.front_root + URL.front_board

class Default(Resource):
    def get(self):
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }

class TestAuth(Resource):
    def get(self):
        if not google.authorized:
            return "You are not authorized!"
        else:
            return "You are authorized!"

class Login(Resource):
    def get(self):
        if not google.authorized:
            return redirect(url_for("google.login"))
        else:
            return redirect(local_redirect_url)

    @oauth_authorized.connect
    def logged_in(blueprint, token):
        try:
            flash("Signed in successfully with {name}!".format(
                name=blueprint.name.capitalize()
            ))
            print(get_flashed_messages)
            resp = google.get("/oauth2/v1/userinfo")
            assert resp.ok, resp.text
            user_id = resp.json()['id']
            user_email = resp.json()["email"]
            user_nickname = resp.json()['name']
            print(user_id, user_email, user_nickname) 
            
            res = check_user_id_exists(user_id)
            print("Result code: ", res, res[0])

            if res[0] != 1:
                add_user(user_id, user_nickname, user_email)

            # print(session, token)

        except (TokenExpiredError) as e:  # or maybe any OAuth2Error
            return redirect(url_for("google.login"))
       

def init_routes(api):
    api.add_resource(Default, '/')
    api.add_resource(Login, '/login')
    api.add_resource(TestAuth, '/test')

