#!/bin/bash

# Build script for Render deployment
echo "Starting build process..."

# Install dependencies
npm install

# Build frontend
echo "Building frontend..."
npm run build

echo "Build completed successfully!"