# syntax=docker/dockerfile:1.7
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,id=jaimevaliente-npm-cache,target=/root/.npm,sharing=locked \
    npm ci --prefer-offline
COPY . .
# Servido en la raíz de su dominio (detrás de Nginx Proxy Manager), no bajo /jaime-valiente-web-demo.
ARG ASTRO_SITE=http://localhost
ENV ASTRO_SITE=$ASTRO_SITE ASTRO_BASE=/
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
