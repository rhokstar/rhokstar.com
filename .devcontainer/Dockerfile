# Use the official Node.js 16 as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
# COPY package*.json ./

# Install project dependencies
# RUN npm install --verbose

# Copy the rest of your application code to the container
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]
