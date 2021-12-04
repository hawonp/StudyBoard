import re
from config.imports import mariadb, abort
from config.db_connect import get_connection
#Import datetime to insert date time when creating row
from datetime import datetime
#Import tag to check/add tag for the post
from query.tag_query import get_tag_by_name, add_tag, add_post_tag, delete_all_tags_of_post
import itertools
##########################################################
#                         INSERT                         #
##########################################################
# Adding Post entries to the db.
def add_post(user_id, title, text, img_url, tags, date_time):
    new_post_id = 0 #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        
        query = "INSERT INTO Post (user_id, post_title, post_text, post_image, post_date) VALUES (?, ?, ?, ?, ?)"
        values = (user_id, title, text, img_url, date_time)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        new_post_id = cursor.lastrowid

        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

        #Now add the tags related to this post. Add new tag if tag doesnt exist.
        for tag in tags:
            #Filter out empty tag 
            if tag =="":
                continue

            #Check if tag already exists.
            tag_row = get_tag_by_name(tag)
            
            #If it doesnt, add a new tag,  If so, get the tag id
            if tag_row == None:
                tag_id = add_tag(tag)
            else:
                tag_id = tag_row[0]

            #Add the entry to post_tag
            add_post_tag(tag_id, new_post_id)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()
    return new_post_id

# Adding Post entries to the db.
def add_user_like_post(user_id, post_id):
    new_user_post_like_id = 0 #When meeting and error or not found
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "INSERT INTO User_Post_Like (user_id, post_id) VALUES (?, ?)"
        values = (user_id, post_id)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Getting id of newly added post
        new_post_id = cursor.lastrowid

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return new_user_post_like_id

##########################################################
#                         SELECT                         #
##########################################################
def get_post_feed(page, order):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        limit = 10
        offset = (page - 1) * 10 #if page 1, then it should start from 1.
        if order:
            #If the order is in likes
            query = "SELECT post_id, post_title, post_text, post_image, post_like_count, post_reply_count, post_favourite_count, post_date, user_nickname, user_is_endorsed, user_is_mod FROM Post, User WHERE User.user_id = Post.user_id ORDER BY post_like_count DESC LIMIT ?, ?"
        else:
            query = "SELECT post_id, post_title, post_text, post_image, post_like_count, post_reply_count, post_favourite_count, post_date, user_nickname, user_is_endorsed, user_is_mod FROM Post, User WHERE User.user_id = Post.user_id ORDER BY post_date DESC LIMIT ?, ?"
        values = (offset, limit)

        #Fetching posts with filter, sort, limit, and offset
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        #Close cursor
        cur.close()

        #Obtain max page count
        # Obtainting DB cursor
        cur = conn.cursor()

        #Set up query statement and values
        query = "SELECT COUNT(*) FROM Post"
        # values = (order, offset, limit)
        #Fetching count with given filter
        print("Selecting with query", query, " and values ", values)
        cur.execute(query)

        # serialize results into JSON
        rv = cur.fetchone()

        # return the results!
        res_data = {'posts': json_data, 'maxPageCount': (rv[0]//10 + 1)}

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res_data

def get_post_feed_with_filter(page, order, filter):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        limit = 10
        offset = (page - 1) * 10 #if page 1, then it should start from 1.
        format_string = ','.join(['?'] * len(filter))
        if order:
            #If the order is in like
            query = "SELECT p.*, u.user_is_endorsed, u.user_is_mod, u.user_nickname FROM User u INNER JOIN (SELECT p.post_id, p.user_id, p.post_title, p.post_text, p.post_image, p.post_like_count, p.post_reply_count, p.post_favourite_count, p.post_date FROM Post p INNER JOIN (SELECT post_id FROM Post_Tag WHERE tag_id IN ("+format_string+")) AS pid ON pid.post_id = p.post_id) AS p ON p.user_id = u.user_id ORDER BY post_like_count DESC LIMIT ?, ?"
        else:
            query = "SELECT p.*, u.user_is_endorsed, u.user_is_mod, u.user_nickname FROM User u INNER JOIN (SELECT p.post_id, p.user_id, p.post_title, p.post_text, p.post_image, p.post_like_count, p.post_reply_count, p.post_favourite_count, p.post_date FROM Post p INNER JOIN (SELECT post_id FROM Post_Tag WHERE tag_id IN ("+format_string+")) AS pid ON pid.post_id = p.post_id) AS p ON p.user_id = u.user_id ORDER BY post_date DESC LIMIT ?, ?"
        values = tuple(filter) + (offset, limit)

        #Fetching posts with filter, sort, limit, and offset
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))


        #Close cursor
        cur.close()

        #Obtain max page count
        # Obtainting DB cursor
        cur = conn.cursor()

        #Set up query statement and values
        query = "SELECT COUNT(*) FROM Post p INNER JOIN (SELECT post_id FROM Post_Tag WHERE tag_id IN ("+format_string+")) AS pid ON pid.post_id = p.post_id"
        values = tuple(filter)
        #Fetching count with given filter
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        rv = cur.fetchone()

        # return the results!
        res_data = {'posts': json_data, 'maxPageCount': (rv[0]//10 + 1)}

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res_data = 0
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res_data

#Get posts
def get_posts():
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        query = "SELECT post_id, post_title, post_text, post_image, post_like_count, post_reply_count, post_favourite_count, post_date, user_nickname, user_is_endorsed, user_is_mod FROM Post, User WHERE user.user_id = Post.user_id"

        print("Selecting with query", query)
        cur.execute(query)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        json_data = 0

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return { 'posts': json_data }

#Get posts by user
def get_posts_by_user(user_id):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        #Set up query statements and values
        query = "SELECT post_id, post_title, post_text, post_image, post_like_count, post_reply_count, post_date, user_nickname, user_is_endorsed, user_is_mod FROM Post, User WHERE user.user_id = Post.user_id and Post.user_id = ?"
        values = (user_id, )
        print("Selecting with query", query)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        return -1

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

def get_posts_by_tag_name(tag_name):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()
        
        #Set up query statements and values
        query = "SELECT Post.* FROM Post, Post_Tag, Tag WHERE Post_Tag.post_id = Post.post_id && Post_Tag.tag_id = Tag.tag_id && LOWER(Tag.tag_name) = LOWER(?)"
        values = (tag_name, )
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data=[]

        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        return -1

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

# Search for tags
def search_tags(input):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        if(len(input) < 1):
            abort(400)

        #Set up query statements and values
        query = "SELECT DISTINCT  Tag.tag_id, Tag.tag_name From Post_Tag, Tag where Tag.tag_id = Post_Tag.tag_id && LOWER(Tag.tag_name) LIKE LOWER(?)"
        values = ("%" + input + "%", )
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        tag_result = cur.fetchall()
        return_result = []

        for i in range(len(tag_result)):
            # tag_result[i] = "[TAG] " + tag_result[i]
            temp = { "type" : "tag", "id" : tag_result[i][0], "text" : tag_result[i][1]}
            return_result.append(temp)

    except mariadb.Error as e:
        print(f"Error search database for tags: {e}")
        return None

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return return_result

# search bar
def search_posts(input):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cur = conn.cursor()

        if(len(input) < 1):
            abort(400)
                # query = "SELECT DISTINCT Post.post_id, Post.post_title From Post where Post.post_title LIKE ? || Post.post_text LIKE ?"
        # query = "SELECT DISTINCT Post.post_id, Post.post_title From Post where Post.post_title LIKE ?"

        query = "SELECT DISTINCT Post.post_id, Post.post_title From Post where LOWER(Post.post_title) LIKE LOWER(?)"
        values = ("%" + input + "%", )
        print("Selecting with query", query, " and values ", values)
        cur.execute(query, values)

        # serialize results into JSON
        post_result = cur.fetchall()

        return_result = []

        # flatten the result matrix
        for i in range(len(post_result)):
            temp = {"type" : "post", "id" : post_result[i][0], "text" : post_result[i][1]}
            return_result.append(temp)
        #     post_result[i] = "[POST] " + post_result[i]
        

    except mariadb.Error as e:
        print(f"Error search database for tags: {e}")
        return None

    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return return_result

# search just tags
def get_search_results_posts(input):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        query = "SELECT DISTINCT Post.*, User.user_nickname From Post, User where Post.user_id = User.user_id && LOWER(Post.post_title) LIKE LOWER(?)"
        values = ("%" + input + "%", )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers=[x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data=[]

        for result in rv:
            result = list(result)
            datetime = result[-2].strftime('%Y-%m-%d %H:%M:%S')
            result[-2] = datetime
            result = tuple(result)
            json_data.append(dict(zip(row_headers,result)))

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        return None
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

def get_search_results_tags(input):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        query = "SELECT DISTINCT Tag.tag_name From Post_Tag, Tag where Tag.tag_id = Post_Tag.tag_id && LOWER(Tag.tag_name) LIKE LOWER(?)"
        values = ("%" + input + "%", )
        print("Selecting with query", query, " and values ", values)

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)

        # serialize results into JSON
        res = cursor.fetchall()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        return None
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res


#Get post by id
def get_post_by_id(post_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT u.user_is_endorsed, u.user_is_mod, u.user_nickname, u.user_id, pst.* FROM User u INNER JOIN (SELECT * FROM Post WHERE post_id=?) AS pst ON pst.user_id = u.user_id"
        values = (int(post_id), )

        #Getting data from table
        print("Searching with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()
        
        #Serialise result into json
        row_headers=[x[0] for x in cursor.description]
        res = dict(zip(row_headers,res))

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        return None
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res

#Check if the user liked the post
def check_if_user_liked_post(user_id, post_id):
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "SELECT EXISTS(SELECT * FROM User_Post_Like WHERE user_id=? AND post_id=?)"
        values = (user_id, int(post_id))

        #Getting data from table
        print("Checking existance with query", query, " and values ", values)
        cursor.execute(query, values)
        res = cursor.fetchone()

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res[0]

##########################################################
#                         UPDATE                         #
##########################################################

def update_post(post_id, title, text, image, tags):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #First add the Post to Post table
        #Set up query statement and values
        query = "UPDATE Post SET post_title=?, post_text=?, post_image=? WHERE post_id=?"
        values = (title, text, image, post_id)

        #Adding new data into table
        print("Adding with query", query, " and values ", values)
        cursor.execute(query, values)

        #Clear all the tags from the post
        delete_all_tags_of_post(post_id)
        
        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

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
            add_post_tag(tag_id, post_id)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
        #Closing cursor and commiting  connection
        cursor.close()
        conn.commit()
        conn.close()

    return res

##########################################################
#                         DELETE                         #
##########################################################
#User un-likes a post. Delete from User_Post_like
def delete_user_like_post(user_id, post_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM User_Post_Like WHERE user_id=? AND post_id=?"
        values = (user_id, int(post_id))

        #Getting data from table
        print("Deleting with query", query, " and values ", values)
        cursor.execute(query, values)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res

#Delete post
def delete_post(post_id):
    res = 1
    try:
        #Obtain DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        #Set up query statement and values
        query = "DELETE FROM Post WHERE post_id=?"
        values = (post_id,)

        #Getting data from table
        print("Deleting with query", query, " and values ", values)
        cursor.execute(query, values)

    except mariadb.Error as e:
        print(f"Error adding entry to database: {e}")
        res = 0
    
    #Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res