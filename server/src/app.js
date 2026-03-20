const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Files (from Docker build)
app.use(express.static(path.join(__dirname, "../public")));

// Health Check Route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ShopSmart Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// Root Route - Serve frontend for any other route
app.get("*", (req, res) => {
  // If the file exists in public, express.static will handle it.
  // This catch-all is for SPA routing.
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
