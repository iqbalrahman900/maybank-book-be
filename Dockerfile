# Create or update Dockerfile
cat > Dockerfile << EOL
# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD [ "npm", "run", "start:prod" ]
EOL

# Build and run again
docker-compose up -d --build