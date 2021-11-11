from config.imports import mariadb
from config.db_connect import conn
#Import datetime to insert date time when creating row
from datetime import datetime
#Import tag to check/add tag for the post
from query.tag_query import get_tag_by_name, add_tag, add_post_tag
##########################################################
#                         INSERT                         #
##########################################################
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

    return new_post_id

##########################################################
#                         SELECT                         #
##########################################################
def get_post_feed(page, order, filter):
    # Obtainting DB cursor
    cur = conn.cursor()

    #Set up query statements and values
    limit = 10
    offset = (page - 1) * 10 #if page 1, then it should start from 1.
    query = "SELECT post_id, post_title, post_text, post_image, post_like_count, post_reply_count, post_favourite_count, post_date, user_nickname FROM Post, User WHERE user.user_id = Post.user_id ORDER BY ? LIMIT ?, ?"
    values = (order, offset, limit)

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

    #Close cursor
    cur.close()
    conn.commit()

    # return the results!
    res_data = {'posts': json_data, 'maxPageCount': (rv[0]//10 + 1)}
    return res_data
