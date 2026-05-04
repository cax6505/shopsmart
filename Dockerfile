# ──────────────────────────────────────────────────────────────
# Stage 1: Build — install production dependencies
# ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY server/package.json server/package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# ──────────────────────────────────────────────────────────────
# Stage 2: Production — minimal runtime image
# ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS production

# Add labels for traceability
LABEL maintainer="shopsmart-team"
LABEL description="ShopSmart Backend API Service"

WORKDIR /app

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy production node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy application source code
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
  CMD wget --no-verbose --tries=1 --spider http://localhost:5001/api/health || exit 1

# Start the application
CMD ["node", "src/index.js"]
