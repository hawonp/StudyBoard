from config.imports import mariadb
from config.db_connect import get_connection
##########################################################
#                         INSERT                         #
##########################################################
# Adding to favourites.


def add_user_favourite_post(user_id, post_id):
    res = 0  # When meeting and error or not found
    try:
        # Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statement and values
        query = "INSERT INTO Favourite_Question (user_id, post_id) VALUES (?, ?)"
        values = (user_id, post_id)

        # Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        # Getting id of newly added post
        res = cursor.lastrowid
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res

##########################################################
#                         SELECT                         #
##########################################################
# Check if the user favourited the post


def check_if_user_favourited_post(user_id, post_id):
    try:
        # Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM Favourite_Question WHERE user_id=? AND post_id=?)"
        values = (user_id, int(post_id))

        # Getting data from table
        print("Checking existance with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = [0]
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res[0]

# Get list of favourited posts


def get_favourited_post(user_id):
    try:
        # Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statement and values
        query = "SELECT p.*, u.user_nickname FROM Post p INNER JOIN (SELECT post_id FROM Favourite_Question WHERE user_id=?) AS fav ON fav.post_id = p.post_id INNER JOIN User u ON u.user_id = p.user_id"
        values = (user_id, )

        # Getting data from table
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)

        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

        res = json_data
    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res

##########################################################
#                         DELETE                         #
##########################################################
# User un-favourites a post. Delete from favourites


def delete_user_favourite_post(uid, pid):
    res = 1
    try:
        # Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statement and values
        query = "DELETE FROM Favourite_Question WHERE user_id=? AND post_id=?"
        values = (uid, int(pid))

        # Getting data from table
        print("Deleting with query", query, " and values ", values)
        cursor.execute(query, values)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res
