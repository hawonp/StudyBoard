from config.imports import Resource, json, mariadb
from config.db_connect import conn

class MySql(Resource):
    def get(self):
        try:
            #Obtain DB cursor
            cursor = conn.cursor()  

            print("Testing Connection by fetching list of all tables")
            cursor.execute("SHOW tables")

            result = cursor.fetchall()

            print(result)

            cursor.close()
            conn.commit()
            return result

        except mariadb.Error as e:
            print(f"Error querying the database: {e}")
            return "Could not connect to DB"

def init_routes(api):
    api.add_resource(MySql, '/conn')

