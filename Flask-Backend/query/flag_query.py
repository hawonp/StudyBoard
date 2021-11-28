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