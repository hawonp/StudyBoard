from config.imports import mariadb
from config.db_connect import conn
##########################################################
#                         INSERT                         #
##########################################################
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


##########################################################
#                         SELECT                         #
##########################################################