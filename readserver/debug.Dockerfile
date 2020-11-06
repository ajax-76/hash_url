FROM node:latest

LABEL Ankit Seth

#ENV MONGO_URL=mongodb://mongo:27017/HASHED_URL
ENV MONGO_DATABASE=HASHED_URL
ENV SERVER_PORT=6001
# ENV SMTP_HOST=SMTP_HOST,
# ENV SMTP_PORT=SMTP_PORT,
# ENV SMTP_USERNAME=SMTP_USERNAME,
# ENV SMTP_PASSWORD=SMTP_PASSWORD,
# ENV API_URL='https=//debug-api.qart.in'


WORKDIR /var/www/api/hash_url/read

COPY . /var/www/api/hash_url/read

# RUN npm install bcrypt
RUN npm install pm2 -g

RUN npm install


EXPOSE ${SERVER_PORT}

ENTRYPOINT  [ "pm2-runtime" ,"start" ,"/var/www/api/hash_url/read/index.js" ,"-i" ,"max" ]
