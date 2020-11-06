FROM node:latest

LABEL Ankit Seth

#ENV MONGO_URL=mongodb://mongo:27017/HASHED_URL
ENV MONGO_DATABASE=HASHED_URL
ENV SERVER_PORT=6000
ENV READ_URL=http://192.168.0.104:8080
# ENV SMTP_HOST=SMTP_HOST,
# ENV SMTP_PORT=SMTP_PORT,
# ENV SMTP_USERNAME=SMTP_USERNAME,
# ENV SMTP_PASSWORD=SMTP_PASSWORD,
# ENV API_URL='https=//debug-api.qart.in'


WORKDIR /var/www/api/hash_url/write

COPY . /var/www/api/hash_url/write

# RUN npm install bcrypt
RUN npm install pm2 -g

RUN npm install


EXPOSE ${SERVER_PORT}

ENTRYPOINT  [ "pm2-runtime" ,"start" ,"/var/www/api/hash_url/write/index.js" ,"-i" ,"max" ]
