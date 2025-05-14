# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the default Next.js port
EXPOSE 3000

# Run Next.js dev server (no build)
CMD ["npm", "run", "dev"]
