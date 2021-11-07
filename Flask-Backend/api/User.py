from config.db_connect import conn
from config.imports import json
from config.imports import Resource

#Defining the routes
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
    api.add_resource(UserInfo, '/api/user')