FROM node:8.11.3-alpine

ENV HOME=/app
RUN mkdir $HOME
WORKDIR $HOME/
RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

RUN apk update
RUN apk add yarn

CMD ["/app/run.sh"]
