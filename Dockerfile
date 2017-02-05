# docker build -t express-hello .
# docker run -p 27017:27017 -d --name db mongo
# docker run -p 8443:8443 --link db:db_1 express-hello
# docker run -p 8443:8443 -v /Users/atavistmacbookpro/Repos/express-hello:/usr/src/app --link db:db_1 mean

FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8443

CMD [ "npm", "start" ]