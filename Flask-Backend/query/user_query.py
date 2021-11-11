from config.imports import mariadb
from config.db_connect import conn

##########################################################
#                         INSERT                         #
##########################################################
# Adding User entries to the db.
def add_user(id, nickname, email_address):
    new_user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
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
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    return new_user_id

##########################################################
#                         SELECT                         #
##########################################################
#Get all users
def get_users():
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
        
    # return the results!
    return json_data


#Get user id by email
def get_user_id_with_email(email):
    user_id = "" #When meeting and error or not found
    try:
        #Obtain DB cursor
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
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    #Return result
    return user_id


#Get user by id
def get_user_by_id(id):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT * FROM User WHERE user_id=?"
        values = (id, )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Closing cursor
        cursor.close()
        conn.commit()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return res

#Get user by rank (rank page)
def get_users_order_by_rank(id):
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT user_id, user_nickname FROM User ORDER BY user_likes_received DESC, user_flags_received ASC LIMIT 10"

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query)
        res = cursor.fetchone()
        
        #Closing cursor
        cursor.close()
        conn.commit()
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    return res

##########################################################
#                         UPDATE                         #
##########################################################
#UPDATE table_name SET column1 = value1, column2 = value2 WHERE id=100;
def update_user_nickname(id, nickname):
    try:
        #Obtain DB cursor
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
        res = 1
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    return res