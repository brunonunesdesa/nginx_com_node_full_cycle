FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=password

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306