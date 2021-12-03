from config.imports import mariadb
from config.db_connect import get_connection
#Import datetime to insert date time when creating row
from datetime import datetime
##########################################################
#                         INSERT                         #
##########################################################
# Adding Reply to post to the db.
def add_post_reply(user_id, post_id, text):
    try:
        #Obtain DB cursor
        conn = get_connection()
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

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

        add_reply_to_post_link(post_id, res)       

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0 #When meeting and error or not found

    return res

# Adding when reply is a reply to a post
def add_reply_to_post_link(post_id, reply_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
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
        conn.close()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0 #When meeting and error or not found

    return res

#Add reply to reply
def add_reply_reply(user_id, reply_id, post_id, text):
    try:
        #Obtain DB cursor
        conn = get_connection()
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

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

        add_reply_to_reply_link(reply_id, post_id, res)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0 #When meeting and error or not found

    return res

# Adding when reply is a reply to a reply
def add_reply_to_reply_link(source_id, post_id, reply_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO Reply_To_Reply (source_id, reply_id, post_id) VALUES (?, ?, ?)"
        values = (int(source_id), int(reply_id), int(post_id))

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        res = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = -1 #When meeting and error or not found

    return res

# Adding like to a reply
def add_user_like_reply(reply_id, user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User_Reply_Like (user_id, reply_id) VALUES (?, ?)"
        values = (user_id, int(reply_id))

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        res = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0 #When meeting and error

    return res

##########################################################
#                         SELECT                         #
##########################################################
def get_replies_to_post(post_id, order, user_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        if order == 0:
            #If the order is in date
            query = "SELECT u.user_is_endorsed, u.user_is_mod, u.user_id, u.user_nickname, u.user_likes_received, u.user_is_endorsed, rp.* FROM User u INNER JOIN (SELECT r.* FROM Reply r INNER JOIN (SELECT * FROM Reply_To_Post WHERE post_id=?)AS rtp ON rtp.reply_id = r.reply_id) AS rp ON rp.user_id = u.user_id ORDER BY reply_date DESC"
        elif order == 1:
            #If the order is in likes
            query = "SELECT u.user_is_endorsed, u.user_is_mod, u.user_id, u.user_nickname, u.user_likes_received, u.user_is_endorsed, rp.* FROM User u INNER JOIN (SELECT r.* FROM Reply r INNER JOIN (SELECT * FROM Reply_To_Post WHERE post_id=?)AS rtp ON rtp.reply_id = r.reply_id) AS rp ON rp.user_id = u.user_id ORDER BY reply_like_count DESC"
        else:
            #If the order is in ranks
            query = "SELECT u.user_is_endorsed, u.user_is_mod, u.user_id, u.user_nickname, u.user_likes_received, u.user_is_endorsed, rp.* FROM User u INNER JOIN (SELECT r.* FROM Reply r INNER JOIN (SELECT * FROM Reply_To_Post WHERE post_id=?)AS rtp ON rtp.reply_id = r.reply_id) AS rp ON rp.user_id = u.user_id ORDER BY user_likes_received DESC"    
        values = (post_id, )

        #Fetching posts with filter, sort, limit, and offset
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        res=[]

        for result in rv:
            res.append(dict(zip(row_headers,result)))

        #Close cursor
        cur.close()
        conn.commit()
        conn.close()

        #Get replies to this reply and whether current user liked it
        for row in res:
            row["replies_to_reply"] = get_replies_to_reply(row["reply_id"], user_id)
            row["did_user_like"] = check_if_user_liked_reply(row["reply_id"], user_id)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0 #When meeting and error

    # return the results!
    return res

def get_replies_to_reply(reply_id, user_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        query = "SELECT u.user_is_endorsed, u.user_is_mod, u.user_id, u.user_nickname, u.user_likes_received, u.user_is_endorsed, rp.* FROM User u INNER JOIN (SELECT r.* FROM Reply r INNER JOIN (SELECT * FROM Reply_To_Reply WHERE source_id=?)AS rtr ON rtr.reply_id = r.reply_id) AS rp ON rp.user_id = u.user_id"
        values = (reply_id, )

        #Fetching posts with filter, sort, limit, and offset
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        res=[]

        for result in rv:
            res.append(dict(zip(row_headers,result)))

        #Close cursor
        cur.close()
        conn.commit()
        conn.close()

        #Check if user liked the reply
        for row in res:
            row["did_user_like"] = check_if_user_liked_reply(row["reply_id"], user_id)
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    return res

    #Check if the user liked the post
def check_if_user_liked_reply(reply_id, user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM User_Reply_Like WHERE user_id=? AND reply_id=?)"
        values = (user_id, int(reply_id))

        #Getting data from table
        print("Checking existance with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        print("user id",user_id,"reply id",reply_id,"like", res[0])
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return res[0]
##########################################################
#                         DELETE                         #
##########################################################
#User un-likes a post. Delete from User_Post_like
def delete_user_like_reply(reply_id, user_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM User_Reply_Like WHERE user_id=? AND reply_id=?"
        values = (user_id, int(reply_id))

        #Getting data from table
        print("Deleting with query", query, " and values ", values)
        cursor.execute(query, values)
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    return res

#Delete reply
def delete_reply(reply_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Reply WHERE reply_id=?"
        values = (reply_id,)

        #Getting data from table
        print("Deleting with query", query, " and values ", values)
        cursor.execute(query, values)
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    return res