import config.imports as imports
from config.db_connect import conn

#Obtain DB cursor
cursor = conn.cursor()

# Adding User entries to the db.
def add_user(nickname, email_address):
    try:
        query = "INSERT INTO User (user_nickname , user_email_address) VALUES (?, ?)"
        values = (nickname, email_address)
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)
        conn.commit()
    except imports.mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

def add_post(user, title, text, img_url):
    try:
        query = "INSERT INTO Post (user_id, post_title, post_text, post_iamge) VALUES (?, ?, ?, ?)"
        values = (int(user), title, text, img_url)
        cursor.execute(query, values)
        conn.commit()
    except imports.mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

#Adding users
def add_users():
    print("Adding dummy users...")
    add_user('John Doe', 'Johnny')
    add_user('Mary Jane', 'MaryHadALittleName')
    add_user('Lia Kia', 'LKia')