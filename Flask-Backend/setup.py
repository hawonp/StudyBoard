# imports
from oauthlib.oauth2.rfc6749.errors import TokenExpiredError
import config.imports as imports
import config.db_connect as setting
import config.URL as URL
from auth import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

#Import APIs
import api.Login as Login
import api.Post as Post
import api.Dev as Dev
import api.User as User

# initialize Flask, Flask-RESTful, CORS
app = imports.Flask(__name__)
api = imports.Api(app)
google_local = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A9090%2Flogin%2Fgoogle%2Fauthorized&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=EEm2IZCf2kUngRsREXTJEs9xmtKv87&flowName=GeneralOAuthFlow"
cors = imports.CORS(app, origins=[google_local, "localhost:3000", "http://backend.studyboard.info", "*", "http://localhost:3000"])
app.secret_key = "supersekrit"  # Replace this with your own secret!

# initialize Flask-Dance
app.config["GOOGLE_OAUTH_CLIENT_ID"] = GOOGLE_CLIENT_ID
app.config["GOOGLE_OAUTH_CLIENT_SECRET"] = GOOGLE_CLIENT_SECRET
google_bp = imports.make_google_blueprint(
    # offline=True,
    scope=["openid", "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
)
app.register_blueprint(google_bp, url_prefix="/login")
imports.os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# set connection setting
setting.local_flask = False
local_redirect_url = URL.front_root + URL.front_board


# import dev_tools api
Dev.init_routes(api)

# import routes
Login.init_routes(api)
User.init_routes(api)
Post.init_routes(api)

# logout call
class Logout(imports.Resource):
    def get(self):
        try:
            print("Current Session\n",imports.session)
            token = google_bp.token["access_token"]
            print("\n\n\nCurrent Token\n\n\n", token)
            resp = imports.google.post(
                "https://accounts.google.com/o/oauth2/revoke",
                params={"token": token},
                headers={"Content-Type": "application/x-www-form-urlencoded"}
            )
            assert resp.ok, resp.text
            # logout_user()        # Delete Flask-Login's session cookie
            del google_bp.token  # Delete OAuth token from storage
            imports.session['_flashes'].clear()
            print(imports.session)
            return imports.redirect('/')
        except(TokenExpiredError) as e:
            del google_bp.token
            imports.session['_flashes'].clear()
            print(imports.session)
            print("Current Session\n",imports.session)
            return imports.redirect(local_redirect_url)
            
api.add_resource(Logout, '/logout')

# Run the application
if __name__ == '__main__':
    app.run(debug=False)