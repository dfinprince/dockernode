FROM node:9.11.1-alpine

# Create app directory
WORKDIR /app

# install nodemon for debugging purpose
RUN npm install nodemon@latest -g

# A wildcard is used to copy the package files.
COPY package.json /app/package.json

# Install app dependencies
# For production, use npm install --only=production
RUN npm install
RUN mv /app/node_modules /node_modules

# Bundle app source
COPY . /app

EXPOSE 8080
CMD ["npm", "start"]