# ──────────────────────────────────────────────────────────────
# Stage 1: Frontend Build
# ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS frontend-builder

WORKDIR /app/client

# Copy frontend dependency manifests
COPY client/package.json client/package-lock.json ./

# Install frontend dependencies
RUN npm ci

# Copy frontend source code
COPY client/ ./

# Build the frontend
RUN npm run build

# ──────────────────────────────────────────────────────────────
# Stage 2: Backend Build — install production dependencies
# ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS backend-builder

WORKDIR /app/server

# Copy backend dependency manifests
COPY server/package.json server/package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# ──────────────────────────────────────────────────────────────
# Stage 3: Production — minimal runtime image
# ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS production

WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy production node_modules from backend-builder
COPY --from=backend-builder /app/server/node_modules ./node_modules

# Copy built frontend from frontend-builder to public/
COPY --from=frontend-builder /app/client/dist ./public

# Copy backend source code
COPY server/package.json ./
COPY server/src ./src

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5001

# Expose the application port
EXPOSE 5001

# Switch to non-root user
USER appuser

# Configure healthcheck — polls /api/health every 30s
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:5001/api/health || exit 1

# Start the application
CMD ["node", "src/index.js"]
