from config.imports import mariadb
from config.db_connect import get_connection
#Import datetime to insert date time when creating row
from datetime import datetime
##########################################################
#                         INSERT                         #
##########################################################
# Adding post to the flagged list.
def flag_post(id, user_id, flag_text):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Post_Report (post_id, user_id, report_text, report_date) VALUES (?, ?, ?, ?)"
        values = (int(id), user_id, flag_text, date_time)

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

# Adding reply to the flagged list.
def flag_reply(id, user_id, post_id, flag_text):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Reply_Report (reply_id, user_id, post_id, report_text, report_date) VALUES (?, ?, ?, ?, ?)"
        values = (int(id), user_id, post_id, flag_text, date_time)

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

##########################################################
#                         SELECT                         #
##########################################################
#Get list of flagged posts 
def get_flagged_posts():
    # Obtainting DB cursor
    conn = get_connection()
    cur = conn.cursor()

    #Set up query statements 
    query = "SELECT rpt.*, u.user_nickname FROM User u INNER JOIN (SELECT * FROM Post_Report) AS rpt ON rpt.user_id = u.user_id"

    #Fetching posts with filter, sort, limit, and offset
    print("Selecting with query", query)
    cur.execute(query)

    # serialize results into JSON
    row_headers=[x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))

    #Close cursor
    cur.close()
    conn.commit()
    conn.close()

    # return the results!
    return json_data

#Get list of flagged replies 
def get_flagged_replies():
    # Obtainting DB cursor
    conn = get_connection()
    cur = conn.cursor()

    #Set up query statements 
    query = "SELECT rpt.*, u.user_nickname FROM User u INNER JOIN (SELECT * FROM Reply_Report) AS rpt ON rpt.user_id = u.user_id"


    #Fetching posts with filter, sort, limit, and offset
    print("Selecting with query", query)
    cur.execute(query)

    # serialize results into JSON
    row_headers=[x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data=[]

    for result in rv:
        json_data.append(dict(zip(row_headers,result)))

    #Close cursor
    cur.close()
    conn.commit()
    conn.close()

    # return the results!
    return json_data

##########################################################
#                         UPDATE                         #
##########################################################
def update_flag_count(flag_id, report_tpye, updateType):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        if report_tpye: #1 = post, 0 = reply
            content_table_name = "Post"
            content_table_id = ".post_id"
            report_table_name = "Post_Report"
        else:
            content_table_name = "Reply"
            content_table_id = ".reply_id"
            report_table_name = "Reply_Report"
        #Set up query statement and values. 1 is accept, 0 is deny SELECT Post.user_id FROM Post, Post_Report WHERE Post_Report.report_id = flag_id
        getting_user_id = "SELECT "+content_table_name+".user_id FROM "+content_table_name+", "+report_table_name+" WHERE "+report_table_name+content_table_id+"="+report_table_name+content_table_id+" AND "+report_table_name+".report_id = ?"
        if updateType:
            query = "UPDATE User INNER JOIN ("+getting_user_id+") AS uid ON uid.user_id=User.user_id SET User.user_flags_received = User.user_flags_received-1"
        else:
            query = "UPDATE User INNER JOIN ("+getting_user_id+") AS uid ON uid.user_id=User.user_id SET User.user_flags_received = User.user_flags_received+1"
        values = (flag_id, )


        #Adding new data into table
        print("Updating with query", query, " and values ", values)
        cursor.execute(query, values)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0

    return res

##########################################################
#                         DELETE                         #
##########################################################


#Delete flag
def accept_post_flag(post_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Post_Report WHERE post_id=?"
        values = (post_id,)

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

#Delete flag
def deny_post_flag(flag_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Post_Report WHERE report_id=?"
        values = (flag_id,)

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

#Accept and delete flag
def accept_reply_flag(reply_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Reply_Report WHERE reply_id=?"
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

#Deny and delete flag
def deny_reply_flag(flag_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Reply_Report WHERE report_id=?"
        values = (flag_id,)

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
