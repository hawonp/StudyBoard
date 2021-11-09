from config.imports import json
from config.imports import Resource
from config.imports import google
from config.imports import redirect, url_for

class HelloWorld(Resource):
    def get(self):
        # return {
        #     'Galaxies': ['Milkyway', 'Andromeda', 
        #     'Large Magellanic Cloud (LMC)']
        # }
        if not google.authorized:
            return redirect(url_for("google.login"))
        resp = google.get("/oauth2/v1/userinfo")
        assert resp.ok, resp.text
        return "You are {email} on Google".format(email=resp.json()["email"])

def init_routes(api):
    api.add_resource(HelloWorld, '/')
