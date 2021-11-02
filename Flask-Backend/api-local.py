import config.imports as imports
import config.db_connect as setting
import api.User as User

# initialize Flask-RESTful
app = imports.Flask(__name__)
api = imports.Api(app)

# set connection setting
setting.local_flask = False

# import routes
User.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9090, debug=False)
