from datetime import datetime
import time
from config.imports import json, Resource, mariadb

from query.post_query import add_post, add_user_like_post
from query.reply_query import add_post_reply, add_reply_reply, add_user_like_reply
from query.tag_query import add_tag
from query.user_query import add_user, update_user
# version 1.1.1
# api to add dummy data has been added.
# To add dummy data to the database:
# 1. host the server (dbms and flask backend)
# 2. go to localhost:9090/populate/<id> where <option> is the option you want.
# 3. You will see {"Database population complete"}
# example: http://localhost:9090/dev/populate/1


def populate_db(id):
    if id == 0:
        print("Adding users")
        add_user('654366234324324', 'NordWe', 'nordwestern@smail.com')
    elif id == 1:
        #math 
        add_user('786123453217657', 'Jill', 'jilliandollars@gmail.com')
        update_user('786123453217657', 'Jill', ["math"])
        add_post('786123453217657', "How do you get the median if there are even number of elements?", "<p>I learned that median is the middlemost number in a set.</p> <p>But in a set of even number of elements, there isn't really a middle number.</p> <p>Could someone tell me how to get the median in this case? would it be the average of the two middlemost numbers?</p>", "None", ["math", "median"], "2021-12-02 22:33:27")
        add_post('786123453217657', "How do you find the area of this triangle?", "<p>I know how to get it when the base and height are given.</p><p>However, in this question, it gives the length of its sides and the size of the angle between the two sides.</p><p>Help!&nbsp;</p>", "https://ucarecdn.com/18812107-78db-46e7-aa05-19d3a283f91f/", ["math", "area-of-triangle", "area", "triangle"], "2021-12-02 22:33:27")
        add_post('786123453217657', "proving by induction the formula for sum of arithmetic sequence", "<p>I have to prove by induction: 1+2+3+…+n=n(n+1)/2</p><p>I did the first part</p><p>Prove by mathematical induction.</p><ol><li>Let P(n) be the statement: 1+2+…n=n(n+1)/2</li><li>First, when taking n = 1, we have that 1 = 1(1+1)/2 = 2/2 = 1.</li><li>Hence it holds for n = 1.</li><li>Now assume P(n) is true for some k. Then we have that 1+2+…k = k(k+1)/2.</li></ol><p>Now I have to show that the rule holds for k+1, but I'm stuck here. could someone help?</p>", "None", ["math", "mathematical-induction", "proofs", "sum", "arithmetic-sequence"], "2021-12-01 10:33:00")
        add_post('786123453217657', "What is y-intercept in a quadratic formula?", "<p>What is y-intercept and why does it matter?</p><p>Don't we just need to know the formula?</p>", "None", ["math", "polynomials", "y-intercept"], "2021-09-02 20:13:20")
        time.sleep(0.1)
        add_user('543262435517657', 'yesbrainer', 'ilovebrainteaser@gmail.com')
        update_user('543262435517657', 'yesbrainer', ["brain-teaser", "iq-test", "quiz"])
        #Brain teaser
        add_post('543262435517657', "I have a brain teaser", "<p>Here are the rules.</p><ol><li>Pots will stop.</li><li>Evil people will live.</li></ol><p>Then what will a net be?</p>", "None", ["brain-teaser", "read-carefully"], "2021-01-01 15:30:00")
        add_post('543262435517657', "Finding which lightbulb is connected to which swithc", "<p>For this month, I brought a classic brain teaser.</p><p>Here, there are two rooms. First with the light bulbs and the second with the switches. You must find out which switch is connected to which light bulb.</p><p>Here are the conditions</p><ul><li>You start with the room with switches</li><li>There is no way of checking whether the light bulb is on from the first room.</li><li>Once you leave the room, you cannot come back.</li><li>There is no time limit</li></ul><p>How will you do it?</p>", "None", ["brain-teaser", "read-carefully", "conversion-of-energy"], "2021-02-01 15:30:00")
        add_post('543262435517657', "Getting my age from my brothers age", "<p>Welcome to brain teaser of March!</p><p>This should be simple for you.</p><p>I have a brother who's age was half of mine when I was 10.</p><p>What will his age be now, when I'm 25?</p>", "None", ["brain-teaser","math"], "2021-03-01 15:30:00")
        add_post('543262435517657', "What's the next number?", "<p>Hey there. It's me again. I have a question with numbers this time.&nbsp;</p><p>I keep seeing these on a community on a monthly basis, but cant get them solved.</p><p>Please help!</p>", "https://ucarecdn.com/151f3778-815c-45eb-80b8-6fc4088f34f4/", ["brain-teaser","not-math"], "2021-04-01 15:30:00")
        # add_post(u_id_1, "", "", "None", ["brain-teaser",], "2021-05-01 15:30:00")
        time.sleep(0.1)
        add_user('786457864587657', 'KimJung', 'undeuxtrois@amail.com')
        #Military
        add_post('786457864587657', "Why are slbms really important?", "<p>The news said that the deveopment of SLBMs by countries like North Korea is quite a threat.</p><p>However, I don't get it. Even if they do develop one and launch it, don't we have a host of defense measures like THAAD and patriots?</p><p>How would that be so different from them launching an ICBM from their land?</p>", "None", ["military", "slbm", "missile"], "2021-04-05 16:10:00")
        time.sleep(0.1)
        add_user('543216234554324', 'PhysicsisLIFE', 'phy123@smail.com')
        update_user('543216234554324', 'PhysicsisLIFE', ["physics", "nuclear-physics"])
        #Physics
        add_post('543216234554324', "So what can we really do with the higgs particle?", "<p>I know that there has been quite some hype around the particle that is known to define&nbsp;</p><p>‘mass’. I also think that it was a huge step forward for mankind to find another particle that defines the forces of this universe.</p><p>However, would there be any way to utilise what we have discovered? I know that even radio waves weren't discovered to use something and we ended up using it in our everyday lives. But such a small particle that we cannot even observe without the help of the largest particle collider on Earth doesn't seem very easy to use?</p>", "None", ["physics","higgs-boson", "standard-model", "boson"], "2021-02-01 13:30:00")
        add_post('543216234554324', "How efficient is wireless charging really?", "<p>Wireless charging seems to be the trend nowadays.</p><p>But how efficient is it?</p><p>It is for sure that it isn't as efficient as wired charging.</p><p>But I see it almost everywhere. Watches are charged using wireless charging only, power banks support wireless charging, and now there are laptops or phones that wirelessly charge other devices.</p><p>In the time and age that needs energy conservation and protection of the environment, wouldn't such ‘features’ be just another way to waste more energy?</p><p>Or has the technology developed that much that the loss is negligible?</p>", "None", ["physics","wireless-charging","magnetic-induction"], "2021-10-11 12:30:00")
        add_post('543216234554324', "Speed of light from a moving car?", "<p>So, I know that the speed of light is 3x10<sup>8</sup> m/s</p><p>So what happens if a car moving at the speed of 30m/s shoots a light? Does the speed of the car get added to the speed of light since the light starts with that speed?</p><p>If not, why not?</p>", "https://ucarecdn.com/6db86511-6a5d-4afe-a78d-c93c548386c3/", ["physics","speed-of-light","speed","light"], "2021-03-10 15:30:00")
        add_post('543216234554324', "Why can't electric cars just generate energy when theyre moving?", "<p>I found out that hybrid cars charge their batteries when moving by generating electricity using the rotation of the motor or the wheel &nbsp;( I dont quite remember clearly)</p><p>Anyways, why can't electric cars use the same method to get more distance covered?</p>", "None", ["physics","battery", "energy", "electric-cars"], "2021-05-01 15:30:00")
        add_post('543216234554324', "What happens in a particle collider?", "<p>What happens in a particle collider?</p><p>Do people just literally take two particles and bash them together?</p>", "None", ["physics","particle-physics", "collider"], "2021-01-21 16:30:00")
        time.sleep(0.1)
        add_user('654366234554324', 'Exceptional', 'error404@ghmail.com')
        update_user('654366234554324', 'Exceptional', ["computer-science", "data-science", "networking", "algorithms"])
        add_user('642364236423644', 'JohnSawiin', 'jsawin@smail.com')
        update_user('642364236423644', 'JohnSawiin', ["computer-science", "game-programming","C++", "unity"])
        #Computer science
        add_post('654366234554324', "How does each layer in the network layer know the inner layer?", "<p>I learned that network is divided into multiple layers. Could someone explain how the outer layer knows what the inner layer is?</p>", "None", ["computer-science", "networking"], "2021-9-11 10:30:00")
        add_post('654366234554324', "How does my phone switch network seemlessly?", "<p>I noticed that when I move out of my wifi range, the phone switches its network mode from cellular data to wifi.</p><p>I realised that this happens everyday as we are always connected to the network even if we're in a car going from one side of the town to another.</p><p>Shouldn't the network be reset as it changes network?</p>", "None", ["computer-science","network", "network-switching"], "2021-05-01 15:30:00")
        post_0 = add_post('642364236423644', "Im trying to learn game programming.", "<p>I'm currently learning C# and Unity.</p><p>But some people tell me to learn C before learning C# and do data structures and algorithms before C# and Unity.</p><p>Would it be almost mandatory to do those or can I just continue with C# and Unity?</p>", "None", ["computer-science","game","programming"], "2021-08-30 17:40:00")
        add_user_like_post('654366234554324', post_0)
        add_user_like_post('786457864587657', post_0)
        add_user_like_post('543262435517657', post_0)
        add_user_like_post('786123453217657', post_0)
        time.sleep(0.1)

        add_user('654366232354324', 'ChloeS', 'chlochlo@gamail.com')
        update_user('654366232354324', 'ChloeS', ["english"])
        #Grammar
        add_post('654366232354324', "My friend and I or my friend and me?", "<p>I was talking to my friend and I said “My friend and I went to the bar last night”</p><p>But my friend said that it's wrong. He said that it's supposed to be “My friend and me”</p><p>So could someone tell me which one is right?</p><ol><li>My friend and I</li><li>My friend and me</li></ol>", "None", ["english", "grammar"], "2021-08-11 12:10:00")
        time.sleep(0.1)
        add_user('654366234554754', 'NaBrO', 'chems@smail.com')
        update_user('654366234554754', 'NaBrO', ["chemistry", "organic-chemistry"])
        #Chemistry
        add_post('654366234554754', "What really is chemical equilibrium?", "<p>Equilibrium is the state at which both the reactants and products are present in concentrations which have no further tendency to change with time</p><p>But I dont understand what this page is saying. Could somone explain?</p>", "None", ["chemistry", "equilibrium"], "2021-12-01 16:30:00")
        post_1 = add_post('654366234554754', "How is fusion reaction safer than fission reaction?", "<p>Fusion reactions are when you combine atoms to make a heavier one.</p><p>Fission reactions are when you take one atom and break it into two or more.</p><p>Both create large amounts of energy. Sure</p><p>But how is nuclear fusion safer than fission? Shouldn't fusion also be dangerous considering that is how the Sun is producing heat?</p>", "None", ["chemistry", "nuclear-reaction","fission", "fusion"], "2021-09-21 12:50:00")
        add_user_like_post('543262435517657', post_1)
        add_user_like_post('786123453217657', post_1)
        time.sleep(0.1)

        add_user('654366234598754', 'JackSparr', 'chems@zmail.com')
        add_user('654366234554624', 'Beginbeginner', 'pwohan21@gmail.com')
        add_user('654366234558324', 'hailse', 'chemshaileysem@smail.com')
        update_user('654366234598754', 'JackSparr', ["inappropriate"])
        #spam
        rept_post0 = add_post('654366234598754', "Question about the procedure about physical activity", "<p>Do you need some financial assistance?</p><p>Broke but nowhere to borrow money from?</p><p>Don't worry. We got you covered. Just call this number → 032 1236 5478</p><p>Just sign a few papers and there you go!</p><p>Up to 1 million dollars in cash! at the interest rate of 5 %.</p><p>&nbsp;</p><p><i>Additional charges may apply</i></p>", "None", ["chemistry", "physics", "help", "need"], "2021-12-04 16:30:00")
        rept_post1 = add_post('654366234598754', "Question about the procedure about supply and demand", "<p>Do you need some financial assistance?</p><p>Broke but nowhere to borrow money from?</p><p>Don't worry. We got you covered. Just call this number → 032 1236 5478</p><p>Just sign a few papers and there you go!</p><p>Up to 1 million dollars in cash! at the interest rate of 5 %.</p><p>&nbsp;</p><p><i>Additional charges may apply</i></p>", "None", ["demand", "economics", "help", "need"], "2021-12-04 16:32:00")
        #Add reply to this post
        rep_2 = add_post_reply('654366234554624', rept_post0, "get out")
        print("reply id ", rep_2)
        add_post_reply('654366234558324', rept_post0, "reported")

        # add_user_like_reply(rep_2, user_id)

        


#Defining the route
class Dev(Resource):
    def get(self, id):
        populate_db(id)

        return {"result":'Database population complete'}
        

#Add routes to api
def init_routes(api):
    api.add_resource(Dev, '/dev/populate/<int:id>')


#Following are some functions that may turn out useful when building queries or routes 
#
# To print the last executed query
# print(cur.statement)
# 
# Validating string length for a string field for marshmallow param validation
# validate=validate.Length(min=x, max=y)
# 
# 
# 
# 
# 
# 
# 
