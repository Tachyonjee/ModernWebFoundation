#!/bin/bash

echo "🚀 Quick Sync to GitHub"
echo "======================"

# Build first to ensure everything works
echo "Building project..."
npx vite build > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Show what files have changed
    echo ""
    echo "📋 Files that will be synced:"
    git status --porcelain | head -10
    
    echo ""
    echo "⚡ To sync these changes to GitHub, run:"
    echo "   git add ."
    echo "   git commit -m 'Update Tachyon website - $(date '+%Y-%m-%d %H:%M')'"
    echo "   git push"
    echo ""
    echo "🌐 After pushing, Netlify will automatically deploy your updates!"
    
else
    echo "❌ Build failed. Please fix errors first."
    exit 1
fi