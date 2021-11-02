import config.imports as imports
import config.db_connect as setting

#Importing apis
from api.User import HellowWorld, UserInfo
from api.Post import PostHawon

# initialize Flask-RESTful
app = imports.Flask(__name__)
api = imports.Api(app)

# set connection setting
setting.local_flask = False

# Populate db with dummy data. Uncomment before running
import populate_db
# populate_db.add_users()

# Adding routes to API
api.add_resource(HelloWorld, '/')
api.add_resource(UserInfo, '/user')
api.add_resource(PostHawon, '/hawonismeh')

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9090, debug=True)
