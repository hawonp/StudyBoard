from config.imports import mariadb
from config.db_connect import get_connection
from query.tag_query import add_user_tag, delete_all_tags_of_user, add_tag, get_tag_by_name, get_user_tags

##########################################################
#                         INSERT                         #
##########################################################
# Adding User entries to the db.
def add_user(id, nickname, email_address):
    new_user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User (user_id, user_nickname , user_email_address) VALUES (?, ?, ?)"
        values = (id, nickname, email_address)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)
        
        #Getting id of newly added user
        new_user_id = cursor.lastrowid
        print("cursor lastrowid is ", cursor.lastrowid)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    return new_user_id

def add_user_to_blacklist(user_id):
    new_user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User (user_id) VALUES (?)"
        values = (user_id, n)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)
        
        #Getting id of newly added user
        new_user_id = cursor.lastrowid
        print("cursor lastrowid is ", cursor.lastrowid)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    return new_user_id

##########################################################
#                         SELECT                         #
##########################################################
#Get all users
def get_users():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM User")

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


#Get user id by email
def get_user_id_with_email(email):
    user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT user_id FROM User WHERE user_email_address=?"
        values = (email, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        user_id = res[0]
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    #Return result
    return user_id

#Check if User exists by Id
def check_user_id_exists(id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT 1 FROM User WHERE user_id =? LIMIT 1)"
        values = (id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"No user exists: {e}")

    return res

#Get user by id
def get_user_by_id(id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()
        
        if(id == None):
            return -1

        #Set up query statement and values
        query = "SELECT * FROM User WHERE user_id=?"
        values = (id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        # serialize results into JSON
        row_headers=[x[0] for x in cursor.description]
        res = dict(zip(row_headers,res))

        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return res

#Get user by rank (rank page)
def get_users_order_by_rank():
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT user_id, user_nickname, user_likes_received, user_is_endorsed FROM User ORDER BY user_likes_received DESC, user_flags_received ASC LIMIT 10"

        #Getting data from table
        print("Searching with query", query)
        cursor.execute(query)
        
        # serialize results into JSON
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        #Closing cursor
        cursor.close()
        conn.commit()
        conn.close()

        for user in json_data:
            user["tags"] = get_user_tags(user["user_id"])
            print(user)
 
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return json_data

def check_if_user_is_mod(user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM User WHERE user_id=? AND user_is_mod=1)"
        values = (user_id, )

        #Getting data from table
        print("Checking if is mod with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor, commit and close connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = [0]
    
    return res[0]

def check_if_user_is_blacklisted(user_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM Blacklisted_User WHERE user_id=?)"
        values = (user_id, )

        #Getting data from table
        print("Checking if is mod with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor, commit and close connection
        cursor.close()
        conn.commit()
        conn.close()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = [0]
    
    return res[0]

##########################################################
#                         UPDATE                         #
##########################################################
def update_user(id, nickname, tags):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "UPDATE User SET user_nickname = ? WHERE user_id=?"
        values = (nickname, id)


        #Adding new data into table
        print("Updating with query", query, " and values ", values)
        cursor.execute(query, values)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

        #Clear all the tags from the post
        if delete_all_tags_of_user(id) == 0:
            return 0

        #Now add the tags related to this post. Add new tag if tag doesnt exist.
        for tag in tags:
            tag = tag.strip()
            #Check if tag already exists.
            tag_row = get_tag_by_name(tag)
            
            #If it doesnt, add a new tag,  If so, get the tag id
            if tag_row == None:
                tag_id = add_tag(tag)
            else:
                tag_id = tag_row[0]

            #Add the entry to post_tag
            add_user_tag(tag_id, id)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0

    return res


###########################################################
#                         TRIGGER                         #
###########################################################
def set_endorse_threshhold(count):
    res = 1
    try:        
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First drop the existing query
        query = "DROP TRIGGER IF EXISTS Set_Endorse_Trigger"
        cursor.execute(query)

        #Set up query statement and values
        query = "CREATE TRIGGER Set_Endorse_Trigger BEFORE UPDATE ON User FOR EACH ROW BEGIN IF NEW.user_likes_received > "+str(count)+" THEN SET NEW.user_is_endorsed=1; END IF; END"

        #Adding new data into table
        print("Setting with query", query)
        cursor.execute(query)

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0

    return res