FROM node:9.11.1-alpine

# Create app directory
WORKDIR /app

# A wildcard is used to copy the package files.
COPY package*.json /app/

# install nodemon for debugging purpose
RUN npm i nodemon@latest -g

# Install app dependencies
# For production, use npm install --only=production
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 8080
CMD ["npm", "start"]