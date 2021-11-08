from datetime import datetime

from config.imports import json
from config.imports import Resource
from config.imports import mariadb
from config.db_connect import conn

# version 1
# api to add dummy data has been added.
# To add dummy data to the database:
# 1. host the server (dbms and flask backend)
# 2. go to localhost:9090/dev/<option> where <option> is the option you want.
# 3. You will see {"performed": "<option>"}
# example: http://localhost:9090/dev/option2

# Options:
# 1. option1: Adds 9 users
# 2. option2: Adds 2 users and 4 posts

#user related
#Getting data
def get_user_id_with_email(email):
    user_id = -1 #When meeting and error or not found
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

    
    return user_id

# Adding User entries to the db.
def add_user(nickname, email_address):
    new_user_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User (user_nickname , user_email_address) VALUES (?, ?)"
        values = (nickname, email_address)


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

#post related
# Adding Post entries to the db.
def add_post(user, title, text, img_url, tags):
    new_post_id = -1 #When meeting and error or not found
    try:
        #Obtain DB cursor
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        date_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        query = "INSERT INTO Post (user_id, post_title, post_text, post_image, post_date) VALUES (?, ?, ?, ?, ?)"
        values = (int(user), title, text, img_url, date_time)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        new_post_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()

        #Now add the tags related to this post. Add new tag if tag doesnt exist.
        for tag in tags:
            print(tag)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

    return new_post_id

#Tag related
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

#Option 1
#Adding 9 users
def populate_db_1():
    print("Adding dummy users...")
    add_user('John', 'Johnny@gmail.com')
    add_user('Mary', 'MaryHadALittleName@gmail.com')
    add_user('Elizabeth', 'xXProMeisterXx@gmail.com')
    add_user('Lia', 'LKia@gmail.com')
    add_user('Hawon', 'hawonp@gmail.com')
    add_user('Young1', 'zeroone@gmail.com')
    add_user('jojo', 'jojobee@gmail.com')
    add_user('Louis', 'louis23@gmail.com')
    add_user('KimJung', 'undeuxtrois@gmail.com')

#Option2
#Adding 2 users
#Adding 4 posts
def populate_db_2():
    print("Adding dummy users...")
    add_user('Jill', 'jilliandollars@gmail.com')
    add_user('Squid', 'gganbu@gmail.com')
    
    print("Adding dummy posts for jill")
    jill_id = get_user_id_with_email('jilliandollars@gmail.com')
    add_post(jill_id, "How do you get the median if there are even number of elements?", "I learned that median is the middlemost number in a set. But in a set of even number of elements, there isn't really a middle number. Could someone tell me how to get the median in this case? would it be the average of the two middlemost numbers?", "None", ["math", "median"])
    add_post(jill_id, "Please solve this for me", "What comes next in the sequence?", "https://res.cloudinary.com/picked/image/upload/q_60,h_600,f_auto/v1631286117/cms/aptitude-test-sample-questions-and-answers-1631286117", ["brain-teaser"])
    add_post(jill_id, "Another brain teaser?", "Solve the question please!", "https://cdn.testingmom.com/uploads/CogAT-6-1.png", ["brain-teaser"])
    
    print("Adding dummy posts for squid")
    squid_id = get_user_id_with_email("gganbu@gmail.com")
    add_post(jill_id, "What happens when we do 456 - 455?", "Last one gets 45.6 million dollars", "None", ["squid-game", "drama"])


#Defining the route
class Dev(Resource):
    def get(self, option):
        if option=='option1':
            populate_db_1()
        elif option=='option2':
            populate_db_2()

        return {'performed': option}
        

#Add routes to api
def init_routes(api):
    api.add_resource(Dev, '/dev/<string:option>')
