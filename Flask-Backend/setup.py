import config.imports as imports
import config.db_connect as setting
from auth import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
#Import APIs
import api.Default as Default
import api.Post as Post
import api.Dev as Dev
import api.User as User

# initialize Flask-RESTful
app = imports.Flask(__name__)
api = imports.Api(app)
cors = imports.CORS(app, origins=["localhost:3000", "http://backend.studyboard.info", "*"])
app.secret_key = "supersekrit"  # Replace this with your own secret!
app.config["GOOGLE_OAUTH_CLIENT_ID"] = GOOGLE_CLIENT_ID
app.config["GOOGLE_OAUTH_CLIENT_SECRET"] = GOOGLE_CLIENT_SECRET
# app.config["in"]
google_bp = imports.make_google_blueprint(scope=["profile", "email"])
app.register_blueprint(google_bp, url_prefix="/login")

imports.os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# set connection setting
setting.local_flask = False

# import default
Default.init_routes(api)

# import dev_tools api
Dev.init_routes(api)

# import routes
User.init_routes(api)
Post.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(debug=False)