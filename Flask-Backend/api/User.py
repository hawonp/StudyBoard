from config.db_connect import conn
from config.imports import mariadb
from config.imports import json
from config.imports import Resource

#######################
# Routes / REST API s #
#######################

class HelloWorld(Resource):
    def get(self):
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }

class UserInfo(Resource):
    def get(self):
        cur = conn.cursor()
        cur.execute("select * from User")

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        #Close cursor
        cur.close()
        
        # return the results!
        return json.dumps(json_data)

#Add routes to api
def init_routes(api):
    api.add_resource(HelloWorld, '/api')
    api.add_resource(UserInfo, '/api/user')

########################################
# Queries to access user table in DBMS #
########################################
# Adding User entries to the db.
def add_user(nickname, email_address):
    new_user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User (user_id, user_nickname , user_email_address) VALUES (?, ?, ?)"
        values = (nickname, email_address)


        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)
        
        #Getting id of newly added user
        new_user_id = cursor.lastrowid
        print("cursor lastrowid is ", cursor.lastrowid)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    return new_user_id

#Get user by id
def get_user_by_id(id):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT user_id FROM User WHERE user_id=?"
        values = (id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor
        cursor.close()
        conn.commit()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

    
    return res