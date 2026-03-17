#!/bin/bash

# Idempotent Setup Script Example
# This script is strictly idempotent, meaning it can be run multiple times
# without causing errors and creating duplicates.

# Create logs directory if it does not exist
mkdir -p logs

# Create data directory if it does not exist
mkdir -p data

# Check if a config file exists before touching it
if [ ! -f "config.json" ]; then
  echo "{}" > config.json
  echo "Created default config.json"
else
  echo "config.json already exists, skipping."
fi

echo "Setup complete!"
