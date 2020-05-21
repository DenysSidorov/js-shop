FROM node:12.16.1

# Create app directory
WORKDIR /app

# Install app dependencies
# RUN npm -g install serve

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
# Bundle app source
COPY src /app

# Build react/vue/angular bundle static files
# RUN npm run build

#EXPOSE 8080
# If serving static files
#CMD ["serve", "-s", "dist", "-p", "8080"]
CMD [ "nodemon", "server.js" ]
