import config.imports as imports
import config.db_connect as setting

app = imports.flask.Flask(__name__)
app.config["DEBUG"] = True

# set connection setting
setting.local_flask = False

# import routes
import api.User

app.run(host='0.0.0.0', port=9090)