# StudyBoard

### Team Members:
- **Hawon Park** (hawon.park@stonybrook.edu / @hawonp)
- **Pyungkang Hong** (pyungkang.hong@stonybrook.edu / @PyungkangHong094)
- **Jeong Ho Shin** (jeongho.shin@stonybrook.edu / @je0shin)

### Problem Statement:
People often have questions that they need answering. There might be a specific term that
they don’t understand or a topic that they are trying to review. More often than not, these people turn
to the internet to try and find an answer. They might be able to find what they are looking for in five
minutes, or they might also end up spending hours without much success. Even if they can find
answers to their questions, these answers might be vague, factually incorrect, or too poorly explained
to understand.

StudyBoard aims to prevent such problems by providing a web platform where anyone with a
question in mind can post their thoughts and receive clear and instructional answers. Users would also
be able to interact with one another by leaving replies, sharing each other’s posts, and even following
interesting users. Users would also be able to like content that they see, be it question or reply, that
would feed into a ranking system where replies with higher ratings would be displayed first.
Naturally, users would also be able to do the opposite and flag any inappropriate or incorrect
questions and replies. This would ensure that no one leaves the site with the wrong information in
mind. Having a unified search bar would also help users peruse through any subject matter of their
choosing.

These features, when combined, would facilitate active discussion and improved learning by
enabling each person to leave with the exact information that they were looking for.

### How to Run In Local:
- change directory to /studyboard
> cd studyboard

- if run using django's test server
> python manage.py runserver --settings=studyboard.settings.local 

- local deployment environment
> docker-compose -f docker-compose-local.yml up --build

### How to Run in Production
- SSH to server
>ssh root@141.164.51.144
 
- enter password
> 5{tCAbweQ!JMzY7(

- navigate to StudyBoard repository
> cd StudyBoard

- pull source code from github
> git pull origin main

- take down old container
> sudo docker-compose down

- start new container
> sudo docker-compose -f docker-compose.yml up --build