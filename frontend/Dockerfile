# Use an official Node.js runtime as the base image
FROM node:20-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app for production
RUN npm run build

# Use nginx to serve the React app
FROM nginx:bookworm

# Copy the build folder from React to the root of nginx (www)
COPY --from=0 /app/build /usr/share/nginx/html

# Copy the custom nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]