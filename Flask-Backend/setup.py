# imports
import config.db_connect as setting
from flask_session import Session
from config.imports import Flask, CORS, Api
from config.config import ApplicationConfig

#Import APIs
import api.Login as Login
import api.Post as Post
import api.Dev as Dev
import api.User as User
import api.Reply as Reply
import api.Mod as Mod
import api.MySql as MySql


# initialize Flask, 
app = Flask(__name__)
app.config.from_object(ApplicationConfig)

# initialize CORS
CORS(app, origins=["localhost:3000", "http://backend.studyboard.info", "*", "localhost:9090"])

# initialize Flask-RESTful
api = Api(app)

# initialize REDIS
server_session = Session(app)

# import dev_tools api
Dev.init_routes(api)

# import routes
Login.init_routes(api)
User.init_routes(api)
Post.init_routes(api)
Reply.init_routes(api)
Mod.init_routes(api)
MySql.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(debug=False)