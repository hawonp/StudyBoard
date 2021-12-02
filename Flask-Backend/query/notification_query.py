from config.imports import mariadb
from config.db_connect import get_connection
from datetime import datetime
# Notification types:
# 0: Someone repleid to your post
# 1: Someone replied to your reply
# 10: Someone liked your post
# 11: Someone liked your reply
# 20: The post/reply you have reported has been deleted
# 21: Your post/reply has been reported and deleted
##########################################################
#                         INSERT                         #
##########################################################
# Adding post to the flagged list.
def add_notif_report_accepted(report_id, content_type):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Notification (user_id, notification_type, notification_date) VALUES ((SELECT user_id FROM "+content_type+" WHERE report_id=? ), 20, ?);"
        values = (int(report_id), date_time)

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

def get_user_notifications(user_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT * FROM Notification WHERE user_id=? ORDER BY notification_date DESC"
        values = (user_id,)

        #Getting data from table
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)
        
        # serialize results into JSON
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        res=[]

        for result in rv:
            res.append(dict(zip(row_headers,result)))

        #Set the notifications as seen
        query = "UPDATE Notification SET notification_seen=1 WHERE user_id=?"
        cursor.execute(query, values)
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    return res

##########################################################
#                         UPDATE                         #
##########################################################

##########################################################
#                         DELETE                         #
##########################################################
#Delete notification
def delete_notification(notification_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Notification WHERE notification_id=?"
        values = (notification_id,)

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

#Delete all notifications
def delete_all_notifications(user_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Notification WHERE user_id=?"
        values = (user_id,)

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