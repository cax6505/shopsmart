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

# Create a non-root user
RUN groupadd -r appuser && useradd -r -g appuser -m appuser

# Copy backend package.json and install production dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --omit=dev

# Copy backend source code
COPY server/src ./src

# Copy frontend build from Stage 1 to backend's public directory
COPY --from=frontend-builder /app/client/dist ./public

# Change ownership to non-root user
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Expose the port the app runs on
EXPOSE 5001

# Healthcheck to verify the app is running
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "const http = require('http'); const options = { hostname: 'localhost', port: 5001, path: '/api/health', timeout: 2000 }; const req = http.request(options, (res) => { process.exit(res.statusCode === 200 ? 0 : 1); }); req.on('error', () => process.exit(1)); req.end();"

# Start the application
CMD ["npm", "start"]
