from __main__ import app
import config.imports as imports
from config.db_connect import conn

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/test', methods=['GET'])
def index():
    # create a connection cursor
    cur = conn.cursor()
    # execute a SQL statement
    cur.execute("select * from test")

    # serialize results into JSON
    row_headers=[x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))

    # return the results!
    return imports.json.dumps(json_data)