#!/bin/bash

# Deployment script for Replit
echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building TypeScript project..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful - dist folder created"
else
    echo "❌ Build failed - dist folder not found"
    exit 1
fi

# Start the server
echo "🌟 Starting production server..."
npm start