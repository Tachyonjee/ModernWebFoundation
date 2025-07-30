#!/bin/bash

echo "🚀 Auto-Push Script for Tachyon Website"
echo "======================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git not initialized. Initializing now..."
    git init
    git branch -M main
    
    # You'll need to set this to your actual GitHub repository URL
    echo "📝 Please set your GitHub repository URL:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git"
    echo "Replace YOUR_USERNAME with your actual GitHub username"
    exit 1
fi

# Check if we have a remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository configured."
    echo "📝 Please add your GitHub repository:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git"
    exit 1
fi

# Build the project to ensure everything works
echo "🔨 Building project..."
if npx vite build; then
    echo "✅ Build successful!"
    
    # Ensure _redirects file exists in build output
    if [ -f "public/_redirects" ]; then
        cp public/_redirects dist/public/_redirects
        echo "📁 _redirects file copied to build output"
    else
        echo '/*    /index.html   200' > dist/public/_redirects
        echo "📁 Default _redirects file created"
    fi
else
    echo "❌ Build failed. Please fix errors before pushing."
    exit 1
fi

# Check if there are any changes to commit
if [[ -n $(git status --porcelain) ]]; then
    echo "📦 Changes detected. Committing and pushing..."
    
    # Add all changes
    git add .
    
    # Create commit message with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    COMMIT_MSG="Auto-update Tachyon website from Replit on $TIMESTAMP"
    
    # Commit changes
    if git commit -m "$COMMIT_MSG"; then
        echo "✅ Changes committed successfully"
        
        # Push to GitHub
        if git push; then
            echo "🎉 SUCCESS! Changes pushed to GitHub"
            echo "🌐 Netlify will automatically deploy your updates"
            echo "📍 Check your Netlify dashboard for deployment status"
            
            # Show what was changed
            echo ""
            echo "📋 Files updated:"
            git diff --name-only HEAD~1 HEAD | head -10
            
        else
            echo "❌ Failed to push to GitHub"
            echo "💡 You may need to configure Git credentials or check repository permissions"
            exit 1
        fi
    else
        echo "❌ Failed to commit changes"
        exit 1
    fi
else
    echo "✅ No changes detected. Repository is up to date."
fi

echo ""
echo "🏁 Auto-push complete!"
echo "Your Tachyon coaching website is now synced with GitHub and Netlify"