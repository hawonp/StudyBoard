from config.imports import mariadb
from config.db_connect import get_connection
##########################################################
#                         INSERT                         #
##########################################################
#Adding tags 
def add_tag(tag):
    tag_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        print("value of tag right now:", tag)
        query = "INSERT INTO Tag (tag_name) VALUES (?)"
        values = (tag, )

        #Adding new data into table
        print("Adding with query", query, "and values", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        print("\n\nadd_tag method\n\n")

        tag_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return tag_id

def add_post_tag(tag_id, post_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        query = "INSERT INTO Post_Tag (tag_id, post_id) VALUES (?,?)"
        values = (tag_id, post_id)

        #Adding new data into table
        print("Adding with query", query, "and values", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        tag_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        tag_id = -1
    
    return tag_id

def add_user_tag(tag_id, user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        query = "INSERT INTO User_Tag (tag_id, user_id) VALUES (?,?)"
        values = (tag_id, user_id)

        #Adding new data into table
        print("Adding with query", query, "and values", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        tag_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        tag_id = -1
    
    return tag_id

##########################################################
#                         SELECT                         #
##########################################################

#Get tag by name
def get_tag_by_name(tag_name):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT * FROM Tag WHERE tag_name=?"
        values = (tag_name, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error getting tags by name: {e}")
        res = None

    return res

def get_post_tags(post_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT t.tag_name FROM Tag t INNER JOIN (SELECT pt.tag_id FROM Post_Tag pt WHERE pt.post_id = ?) AS pt ON pt.tag_id = t.tag_id"
        values = (post_id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchall()
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = None
    
    return res

def get_user_tags(user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT t.tag_name FROM Tag t INNER JOIN (SELECT ut.tag_id FROM User_Tag ut WHERE ut.user_id = ?) AS ut ON ut.tag_id = t.tag_id"
        values = (user_id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchall()
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = None
    
    return res

##########################################################
#                         DELETE                         #
##########################################################
#Delete all tags of given post
def delete_all_tags_of_post(post_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Post_Tag WHERE post_id=?"
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

#Delete all tags of given user
def delete_all_tags_of_user(user_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM User_Tag WHERE user_id=?"
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

    