from config.imports import mariadb
from config.db_connect import conn
#Import datetime to insert date time when creating row
from datetime import datetime
##########################################################
#                         INSERT                         #
##########################################################
# Adding Reply to post to the db.
def add_post_reply(user_id, post_id, text):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Reply (user_id, reply_text, reply_date) VALUES (?, ?, ?)"
        values = (user_id, text, date_time)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        res = cursor.lastrowid

        add_reply_to_post_link(post_id, res)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = -1 #When meeting and error or not found

    return res

# Adding when reply is a reply to a post
def add_reply_to_post_link(post_id, reply_id):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO Reply_To_Post (post_id, reply_id) VALUES (?, ?)"
        values = (int(post_id), int(reply_id))

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        res = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = -1 #When meeting and error or not found

    return res

##########################################################
#                         SELECT                         #
##########################################################
def get_replies_to_post(post_id):
    pass