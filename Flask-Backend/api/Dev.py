from datetime import datetime

from config.imports import json, Resource, mariadb
from config.db_connect import conn

from query.post_query import add_post
from query.tag_query import add_tag
from query.user_query import add_user, get_user_id_with_email
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

#Option 1
#Adding 9 users
def populate_db_1():
    print("Adding dummy users...")
    add_user('463572895246837', 'John', 'Johnny@gmail.com')
    add_user('542364235342643', 'Mary', 'MaryHadALittleName@gmail.com')
    add_user('645232456365423', 'Elizabeth', 'xXProMeisterXx@gmail.com')
    add_user('568246852482654', 'Lia', 'LKia@gmail.com')
    add_user('865248652286546', 'Hawon', 'hawonp@gmail.com')
    add_user('865286255688245', 'Young1', 'zeroone@gmail.com')
    add_user('284248652455665', 'jojo', 'jojobee@gmail.com')
    add_user('246757265424525', 'Louis', 'louis23@gmail.com')
    add_user('786457864587657', 'KimJung', 'undeuxtrois@gmail.com')

#Option2
#Adding 2 users
#Adding 4 posts
def populate_db_2():
    print("Adding dummy users...")
    add_user('786123453217657', 'Jill', 'jilliandollars@gmail.com')
    add_user('786459876987657', 'Squid', 'gganbu@gmail.com')
    
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
