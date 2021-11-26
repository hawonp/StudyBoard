from datetime import datetime

from config.imports import json, Resource, mariadb
from config.db_connect import conn

from query.post_query import add_post
from query.tag_query import add_tag
from query.user_query import add_user, get_user_id_with_email
# version 1.1
# api to add dummy data has been added.
# To add dummy data to the database:
# 1. host the server (dbms and flask backend)
# 2. go to localhost:9090/dev/<option> where <option> is the option you want.
# 3. You will see {"performed": "<option>"}
# example: http://localhost:9090/dev/option2

# Options:
# 1. option1: Adds 8 users
# 2. option2: Adds 3 users and 12 posts

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

#Option2
#Adding 2 users
#Adding 4 posts
def populate_db_2():
    print("Adding dummy users...")
    add_user('786123453217657', 'Jill', 'jilliandollars@gmail.com')
    add_user('786459876987657', 'Squid', 'gganbu@gmail.com')
    
    print("Adding dummy posts for jill")
    jill_id = get_user_id_with_email('jilliandollars@gmail.com')
    add_post(jill_id, "How do you get the median if there are even number of elements?", "<p>I learned that median is the middlemost number in a set.</p> <p>But in a set of even number of elements, there isn't really a middle number.</p> <p>Could someone tell me how to get the median in this case? would it be the average of the two middlemost numbers?</p>", "None", ["math", "median"])
    add_post(jill_id, "Please solve this for me", "<p>What comes next in the sequence?</p>", "https://res.cloudinary.com/picked/image/upload/q_60,h_600,f_auto/v1631286117/cms/aptitude-test-sample-questions-and-answers-1631286117", ["brain-teaser"])
    add_post(jill_id, "Another brain teaser?", "<p>Solve the question please!</p>", "https://cdn.testingmom.com/uploads/CogAT-6-1.png", ["brain-teaser"])
    
    print("Adding dummy posts for KimJung")
    add_user('786457864587657', 'KimJung', 'undeuxtrois@gmail.com')
    kim_id = get_user_id_with_email("undeuxtrois@gmail.com")
    add_post(kim_id, "Hi. I would like to ask how to make bombs but nuclear", "<p>As a holiday project I want to find out how to make nuclear bombs.</p><p>This is for research purposes only and I do not wish to make any trouble. I just want to know how to make, store, and detonate them for knowledge's sake.</p><p>Could someone kindly tell me how?</p><p>If you would like to tell me in person, I can invite you to my house. It is near China&nbsp;</p>", "None", ["physics", "nuclear-bomb", "missile", "for-research-purpose-only"])
    add_post(kim_id, "Hi. about SLBMs", "<p>Aren't SLBM like the strongest weapon now?</p><p>I would like to make one.</p><p>It is totally legal to do it where I live.</p><p>In fact, people will pay you good if you would kindly tell me how.</p><p>Thanks!</p><p><i>Again, this is to solve my curiosity here. No other reason.</i></p>", "None", ["physics", "missile", "for-research-purpose-only"])

    print("Adding dummy posts for squid")
    squid_id = get_user_id_with_email("gganbu@gmail.com")
    add_post(squid_id, "What happens when we do 456 - 455?", "<p><strong>Last one gets 45.6 million dollars</strong></p>", "None", ["squid-game", "drama"])
    add_post(squid_id, "How does each layer in the network layer know the inner layer?", "<p>I learned that network is divided into multiple layers. Could someone explain how the outer layer knows what the inner layer is?</p>", "None", ["computer-science", "networking"])
    add_post(squid_id, "Why would you place datacenters under the sea?", "<p>Sure. I know that it is for cooling the servers without having to use energy.</p><p><strong>But aren't you basically heating up the sea water with that</strong>? Who is gonna take responsibility for rising sea water temperature?</p>", "None", ["computer-science", "networking", "global-warming", "datacenters"])
    add_post(squid_id, "Does vaccination really cause autism?", "<p>I heard people talk about it and everyone in my class believes that it does cause autism.</p><p>I don't think that this makes sense, but now I don't know if I'm right anymore.</p><p>Help!</p>", "None", ["vaccination", "autism", "consipracy", "biology", "bioengineering"])
    add_post(squid_id, "My friend and I or my friend and me?", "<p>I was talking to my friend and I said “My friend and I went to the bar last night”</p><p>But my friend said that it's wrong. He said that it's supposed to be “My friend and me”</p><p>So could someone tell me which one is right?</p><ol><li>My friend and I</li><li>My friend and me</li></ol>", "None", ["english", "grammar"])
    add_post(squid_id, "Is illuminati real?", "<p><strong>I</strong></p><p><strong>L</strong></p><p><strong>L</strong></p><p><strong>U</strong></p><p><strong>M</strong></p><p><strong>I</strong></p><p><strong>N</strong></p><p><strong>A</strong></p><p><strong>T</strong></p><p><strong>I</strong></p>", "None", ["ILLUMINATI"])
    add_post(squid_id, "What really is chemical equilibrium?", "<p>Equilibrium is the state at which both the reactants and products are present in concentrations which have no further tendency to change with time</p><p>But I dont understand what this page is saying. Could somone explain?</p>", "None", ["chemistry", "equilibrium"])


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


#Following are some functions that may turn out useful when building queries or routes 
#
# To print the last executed query
# print(cur.statement)
# 
# 
# 
# 
# 
# 
# 
# 
# 
