ARG NODE_VERSION=20.14.0

# base stage --start
FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /app
# base stage --end

# deps stage --start
FROM base AS deps

COPY package.json .
COPY yarn.lock .

RUN yarn install
# deps stage --end

# build stage --start
FROM deps AS build

COPY . .

ARG APP_VERSION
ENV VITE_APP_VERSION=$APP_VERSION

RUN yarn build
# build stage --end

# publish stage --start
FROM nginx:alpine AS publish

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# publish stage --end

