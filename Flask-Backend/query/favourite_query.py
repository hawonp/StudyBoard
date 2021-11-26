from config.imports import mariadb
from config.db_connect import get_connection
##########################################################
#                         INSERT                         #
##########################################################
# Adding to favourites.
def add_user_favourite_post(user_id, post_id):
    new_user_post_favourite_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO Favourite_Question (user_id, post_id) VALUES (?, ?)"
        values = (user_id, post_id)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        new_post_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

    return new_user_post_favourite_id

##########################################################
#                         SELECT                         #
##########################################################
#Check if the user favourited the post
def check_if_user_favourited_post(uid, pid):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM Favourite_Question WHERE user_id=? AND post_id=?)"
        values = (uid, int(pid))

        #Getting data from table
        print("Checking existance with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
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
#User un-favourites a post. Delete from favourites
def delete_user_favourite_post(uid, pid):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Favourite_Question WHERE user_id=? AND post_id=?"
        values = (uid, int(pid))

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