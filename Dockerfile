# Base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the app files into the container
COPY . .

# Install dependencies and build the app
RUN npm install && npm run build --prod

# Expose port 5001
EXPOSE 5200

# Start the app
CMD ["npm", "start"]



