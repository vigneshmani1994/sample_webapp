# Step 1: Use a lightweight Node image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose the application port
EXPOSE 3000

# Step 6: Define the command to run the app
CMD [ "npm", "start" ]