import config.imports as imports
import config.db_connect as setting

#Import APIs
import api.User as User
import api.Post as Post
import api.Dev as Dev
import api.Default as Default

# initialize Flask-RESTful
app = imports.Flask(__name__)
api = imports.Api(app)

# set connection setting
setting.local_flask = False

# import dev_tools api
Dev.init_routes(api)

# import routes
User.init_routes(api)
Post.init_routes(api)
Default.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(debug=False)
    # app.run(host='0.0.0.0', port=5000, debug=False)
