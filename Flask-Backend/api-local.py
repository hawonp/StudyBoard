import flask
import json
import mariadb
import sys 

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# make connection to mariadb server
try:
    conn = mariadb.connect(
        user="mod",
        password="studyboard2021",
        # host="localhost",
        host="dbms_container",
        port=3306,
        database="studyboard_db"
    )

except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)


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
    return json.dumps(json_data)

app.run(host='0.0.0.0', port=5000)
