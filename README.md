# StudyBoard Introduction

### Team Members:
- **Hawon Park** (hawon.park@stonybrook.edu / @hawonp)
- **Pyungkang Hong** (pyungkang.hong@stonybrook.edu / @PyungkangHong094)
- **Jeong Ho Shin** (jeongho.shin@stonybrook.edu / @je0shin)

### Problem Statement:
People often have questions that they need answering. There might be a specific term that they don’t understand or a topic that they are trying to review. More often than not, these people turn to the internet to try and find an answer. They might be able to find what they are looking for in five minutes, or they might also end up spending hours without much success. Even if they can find answers to their questions, these answers might be vague, factually incorrect, or too poorly explained to understand.

StudyBoard aims to prevent such problems by providing a web platform where anyone with a question in mind can post their thoughts and receive clear and instructional answers. Users are able to interact with one another by leaving replies and sharing posts. Users can also like content that they see, be it question or reply. Users can also flag any inappropriate or incorrect questions and replies. Such posts or their replies are reviewed by moderators and removed if needed. This ensures that no one leaves the platform with the wrong information in hand and that all content is of high quality. Having a unified search bar also helps users peruse through any subject of their choosing.

These features, when combined, facilitates active discussion and improved learning by enabling each person to leave with the exact information that they were looking for. 


## Where to get the Latest Version of StudyBoard?
- The [main](https://github.com/hawonp/StudyBoard) branch of this git repository will always have the latest production version of StudyBoard
- The [dev](https://github.com/hawonp/StudyBoard/tree/dev) branch of this git repository will always be the latest development version of StudyBoard

## Step 1) Local Development Prep
- Download/Clone the [main](https://github.com/hawonp/StudyBoard) branch of StudyBoard

- Create a virtual environment in the **root** directory of the repository and activate it
  - VirtualEnv, Venv, Anaconda all work
## Step 2) Create Docker Network
- Create a user-defined bridge to link mariadb and flask
  > docker network create dbms_network
- Create a user-defined bridge to link nginx to all the different containers (if using nginx)
  > docker network create nginx-proxy
## Step 3) Initialize MariaDB database
- Change directories to DBMS/
  > cd DBMS

- Initialize Database Docker Container
  > docker-compose -f docker-compose-local.yml up --build

- Go back to root directory
  > cd ..

## Step 4) Initialize Flask Backend
- Change directories to Flask_Backend/
  > cd Flask_Backend

- Install Requirements
  > pip install -r requirements.txt

- Initialize Flask Docker Container
  > docker-compose -f docker-compose-local.yml up --build

- Go back to root directory
  > cd ..

## Step 5) Initial NextJs Frontend
- Change directories to Web-React
  > cd Web-React

- Install Requirements
  > yarn install

- 5a) Initialize NextJS Docker Container
  > docker-compose -f docker-compose-local.yml up --build

- 5b) Intialize React dev server
  > yarn run dev

## Required Specs / Compatability
 - Operating System : Any
 - Docker
 - Python 3.9 (Install via virtual environment)

## How to Submit an issue
 - You can submit an issue through the [Github issues](https://github.com/hawonp/StudyBoard/issues) tab
 - All outstanding issues will be located in the issues tab

## Useful Docker commands
 - Check which containers are running
    > docker ps

 - Go into the docker container
    > docker exec -it container_id/container_name bash

 - See logs
    > docker logs --follow container_id

 - Shutdown a docker container
    > docker-compose down

## Links to Website
 - [Frontend](https://studyboard.info/)
