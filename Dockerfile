# Use a lightweight Node.js image
FROM node:18-alpine 

# Set working directory
WORKDIR /kaur_khushleen_portfolio_site 

# Copy package.json and install dependencies
COPY package.json ./ 
RUN npm install 

# Copy project files
COPY . .

# Build the React app
RUN npm run build 

# Install a web server to serve the build folder
RUN npm install -g serve

# Expose port 80 inside the container
EXPOSE 80

# Run the app using serve on port 80 inside container
CMD ["serve", "-s", "build", "-l", "80"]
