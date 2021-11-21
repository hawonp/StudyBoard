from config.imports import mariadb
from config.db_connect import conn
#Import datetime to insert date time when creating row
from datetime import datetime
##########################################################
#                         INSERT                         #
##########################################################
# Adding post to the flagged list.
def flag_post(id, user_id, flag_text):
    try:
        #Obtain DB cursor
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

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = -1 #When meeting and error or not found

    return res

# Adding reply to the flagged list.
def flag_reply(id, user_id, flag_text):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Reply_Report (reply_id, user_id, report_text, report_date) VALUES (?, ?, ?, ?)"
        values = (int(id), user_id, flag_text, date_time)

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
#Get list of flagged posts with offest page. return 10 entries each and max page count
def get_flagged_posts():
    # Obtainting DB cursor
    cur = conn.cursor()

    #Set up query statements and values
    query = "SELECT * FROM Post_Report"

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

    # return the results!
    return json_data

#Get list of flagged replies with offest page. return 10 entries each and max page count
def get_flagged_replies(page):
    # Obtainting DB cursor
    cur = conn.cursor()

    #Set up query statements and values
    limit = 10
    offset = (page - 1) * 10 #if page 1, then it should start from 1.
    query = "SELECT * FROM Reply_Report LIMIT ?, ?"
    values = (page, limit)

    #Fetching posts with filter, sort, limit, and offset
    print("Selecting with query", query, " and values ", values)
    cur.execute(query, values)

    # serialize results into JSON
    row_headers=[x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data=[]

    for result in rv:
        json_data.append(dict(zip(row_headers,result)))

    #Close cursor
    cur.close()

    #Obtain max page count
    # Obtainting DB cursor
    cur = conn.cursor()

    #Set up query statement and values
    query = "SELECT COUNT(*) FROM Reply_Report"
    # values = (order, offset, limit)
    #Fetching count with given filter
    print("Selecting with query", query, " and values ", values)
    cur.execute(query)

    # serialize results into JSON
    rv = cur.fetchone()

    #Close cursor
    cur.close()
    conn.commit()

    # return the results!
    res_data = {'replies': json_data, 'maxPageCount': (rv[0]//10 + 1)}
    return res_data