FROM python:3.7.7

RUN #apt-get update -y && apt-get install -y python3-pip python-dev
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

COPY . .

WORKDIR /studyboard/


# Install dependancies
RUN pip install -r requirements.txt
#RUN chown -R www-data:www-data /opt/app

RUN pip install gunicorn

RUN pip install mysqlclient

#RUN chown -R $USER:$USER .
# start server
EXPOSE 3000

CMD ["python", "manage.py","collectstatic --noinput"]
CMD ["python", "manage.py","makemigrations"]
CMD ["python", "manage.py","migrate"]
#CMD ["bash", "-c", "python manage.py collectstatic --noinput --settings=fdhomepage.settings.deploy && python manage.py migrate --settings=fdhomepage.settings.deploy && gunicorn fdhomepage.wsgi --env DJANGO_SETTINGS_MODULE=fdhomepage.settings.deploy --bind 0.0.0.0:8000"]