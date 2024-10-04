# Use Node 20 as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# install only production dependencies
RUN npm install --omit=dev

# Install serve to run the application
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]