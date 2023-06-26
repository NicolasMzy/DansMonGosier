# Use the official Node.js image as the base image
FROM node:18.16.0-alpine3.18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js application will run
EXPOSE 3001

# Define the command to run your Node.js application
CMD ["node", "app.js"]
