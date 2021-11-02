
FROM python:3.7

# initial python settings
RUN #apt-get update -y && apt-get install -y python3-pip python-dev
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

# copy everything to docker file IO
COPY . .

#expose default port for flask
# EXPOSE 5000
EXPOSE 9090

RUN pip install -r requirements.txt