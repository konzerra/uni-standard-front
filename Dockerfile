# Base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install dependencies
RUN npm install

# Build the project (assuming your build script is correctly set in your package.json)
RUN npm run build

# Expose the application's port
EXPOSE 5200

# Start the application using node
CMD ["node", "index.js"]



