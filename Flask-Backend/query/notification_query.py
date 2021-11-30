from config.imports import mariadb
from config.db_connect import get_connection
##########################################################
#                         INSERT                         #
##########################################################

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
        query = "SELECT * FROM Notification WHERE user_id=?"
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