# Stage 1: Build the frontend
FROM node:20-slim AS frontend-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build the backend and combine
FROM node:20-slim
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy backend package.json and install production dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --omit=dev

# Copy backend source code
COPY server/src ./src

# Copy frontend build from Stage 1 to backend's public directory
COPY --from=frontend-builder /app/client/dist ./public

# Expose the port the app runs on
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
