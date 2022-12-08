ARG NODE_VERSION=16
ARG CLIENT_PORT=3001
ARG SERVER_PORT=3001

FROM node:$NODE_VERSION-buster as base

WORKDIR /app

FROM base as builder

COPY package.json yarn.lock
RUN yarn clean & yarn cache clean & yarn install --frozen-lockfile

COPY . .

RUN yarn lerna bootstrap
RUN rm -rf /app/packages/client/dist/ && yarn build --scope=client
RUN rm -rf /app/packages/server/dist/ && yarn build --scope=server


#FROM nginx:latest as production
#COPY --from=builder /app/packages/client/nginx.conf /etc/nginx/nginx.conf
#EXPOSE $CLIENT_PORT
#CMD [ "nginx", "-g", "daemon off;" ]
FROM node:$NODE_VERSION-buster-slim as production

WORKDIR /app

COPY --from=builder /app/packages/client/dist/ /client/dist
COPY --from=builder /app/packages/server/dist/ /app/
COPY --from=builder /app/packages/server/package.json /app/package.json
RUN yarn install --production=true

EXPOSE $SERVER_PORT
CMD [ "node", "/app/index.js" ]
