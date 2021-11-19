FROM alpine

RUN apk update && apk add curl && rm -rf /var/cache/apk/*

COPY ./cron /etc/crontabs/root

CMD [ "crond", "-f" ]