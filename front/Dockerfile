FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm install -g nodemon
COPY . .

# Build react/vue/angular bundle static files
# RUN npm run build

#EXPOSE 3002
#CMD ["npm", "start"]
