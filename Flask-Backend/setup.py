# imports
import config.imports as imports
import config.db_connect as setting
from config.auth import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

#Import APIs
import api.Login as Login
import api.Post as Post
import api.Dev as Dev
import api.User as User

# initialize Flask, Flask-RESTful, CORS
app = imports.Flask(__name__)
api = imports.Api(app)

cors = imports.CORS(app, origins=["localhost:3000", "http://backend.studyboard.info", "*", "localhost:9090"])
app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'

app.secret_key = "supersekrit"  # Replace this with your own secret!

# set connection setting
setting.local_flask = False

# import dev_tools api
Dev.init_routes(api)

# import routes
Login.init_routes(api)
User.init_routes(api)
Post.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(debug=False)