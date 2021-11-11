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
import flask

# sys.path.append('../Flask-Backend')

# from Flask-Backend.setup import google_bp

class Default(Resource):
    def get(self):
        flask.flash("Hello World!")
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }
class Login(Resource):
    def get(self):
        if not google.authorized:
            return redirect(url_for("google.login"))
        try:
            resp = google.get("/oauth2/v1/userinfo")
            assert resp.ok, resp.text
            return "You are {email} on Google".format(email=resp.json()["email"])
        except (TokenExpiredError) as e:  # or maybe any OAuth2Error
            return redirect(url_for("google.login"))

def init_routes(api):
    api.add_resource(Default, '/')
    api.add_resource(Login, '/login')
    # api.add_resource(Logout, 'logout')

