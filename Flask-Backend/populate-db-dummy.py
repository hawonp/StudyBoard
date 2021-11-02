from config.db_connect import conn

#Obtain DB cursor
cursor = conn.cursor()

# Adding User entries to the db.
def add_users():
    print("a")
