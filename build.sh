#!/bin/bash
# Build script for Netlify deployment

echo "Building Tachyon website for deployment..."

# Install dependencies
npm install

# Build the client-side application
echo "Building React application..."
npx vite build

echo "Build complete! Files are in dist/public/"
echo "The site is ready for deployment to Netlify."