FROM python:3.7

ENV PYTHONUNBUFFERED=1

WORKDIR /studyboard

# Install dependancies
RUN pip install -r requirements.txt
#RUN chown -R www-data:www-data /opt/app
RUN chown -R $USER:$USER .
# start server
EXPOSE 3000

CMD ["bash", "-c", "python manage.py collectstatic --noinput && python manage.py migrate "]
#CMD ["bash", "-c", "python manage.py collectstatic --noinput --settings=fdhomepage.settings.deploy && python manage.py migrate --settings=fdhomepage.settings.deploy && gunicorn fdhomepage.wsgi --env DJANGO_SETTINGS_MODULE=fdhomepage.settings.deploy --bind 0.0.0.0:8000"]