FROM node:16

ARG APP_DIR=/app 
RUN mkdir $APP_DIR 
WORKDIR $APP_DIR

ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD views views
ADD public public

RUN npm ci

ENV PORT=3000
ENV INSTANCE_NAME="Application name"
ENV INSTANCE_HASH="121HJKS"

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -s http://localhost:${APP_PORT}/healthz || exit 1

EXPOSE ${PORT}

ENTRYPOINT [ "node", "main.js" ] 