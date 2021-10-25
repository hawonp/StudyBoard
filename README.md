# StudyBoard Introduction

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

## Where to get the Latest Version of StudyBoard?
- The [main](https://github.com/hawonp/StudyBoard) branch of this git repository will always be the latest version of StudyBoard

## Testing / Development Preparation
- Download/Clone the [main](https://github.com/hawonp/StudyBoard) branch of StudyBoard

- Create a virtual environment in the **root** directory of the repository via venv, virtualenv, or anaconda that uses ***Python 3.7.7***
  - Anaconda Example
    > conda create -n env-name python=3.7.7

- Change directories to the Django folder titled **studyboard**
  > cd studyboard

- Install dependancies via PIP
  > pip install -r requirements.txt 

- Ask a team member for the SECRETS.txt file necessary to run this project

## Testing / Development on Django's Test Server
- Use this when making quick tests using Django's default test-server
  > python manage.py runserver --settings=studyboard.settings.local 

## Testing / Development on a local server via Docker
- Change directories back to the root of the repository

- Run the Docker-Compose-Local file
  > docker-compose -f docker-compose-local.yml up --build

## Deployment to Production Server (WIP, Gurnicorn server not yet set up)
- SSH to production server
  >ssh root@141.164.51.144
 
- Enter Password Authentication
  > 5{tCAbweQ!JMzY7(

- Navigate to StudyBoard repository
  > cd StudyBoard-server/StudyBoard/

- Update git repository 
  > git pull origin main

- Take down old container 
  > sudo docker-compose down

- Start a new container
  > sudo docker-compose -f docker-compose.yml up --build

## Required Specs / Compatability
 - Operating System : Any
 - Python 3.7.7 (Install via virtual environment)

## How to Submit an issue
 - You can submit an issue through the [Github issues](https://github.com/hawonp/StudyBoard/issues) tab
 - All outstanding issues will be located in the issues tab
