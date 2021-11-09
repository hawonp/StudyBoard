from config.db_connect import conn

from config.imports import json
from config.imports import Resource

#Defining the routes
class PostData(Resource):
    def get(self):
        # Obtainting DB cursor
        cur = conn.cursor()

        #Set up query statements and values
        limit = 10
        page = 1
        offset = (page - 1) * 10 #if page 1, then it should start from 1.
        query = "SELECT * FROM Post "
        values = (limit, offset)

        #Fetching posts with filter, sort, limit, and offset
        print("Selecting with query", query, " and values ", values)
        cur.execute()

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        #Close cursor
        cur.close()

        # return the results!
        return json.dumps(json_data, default=str)

#post related
# Adding Post entries to the db.
def add_post(user, title, text, img_url, tags):
    new_post_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Post (user_id, post_title, post_text, post_image, post_date) VALUES (?, ?, ?, ?, ?)"
        values = (int(user), title, text, img_url, date_time)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        new_post_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()

        #Now add the tags related to this post. Add new tag if tag doesnt exist.
        for tag in tags:
            print(tag)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

    return new_post_id

#Tag related
#Adding tags TODO: finish this part
def add_tag(tag):
    tag_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        query = "INSERT INTO Tag (tag_name) VALUES ?"
        values = (tag, )

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        tag_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return tag_id

#Add routes to api
def init_routes(api):
    api.add_resource(PostData, '/api/posts')
