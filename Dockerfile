FROM nginx
COPY dist /usr/share/nginx/html/dnd4j-ui
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80