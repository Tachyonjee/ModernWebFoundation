# 📤 Push Changes to GitHub - Step by Step

## Method 1: Using Git Commands (Recommended)

### Step 1: Initialize Git (if not done already)
```bash
git init
git branch -M main
```

### Step 2: Add Your GitHub Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git
```
*(Replace YOUR_USERNAME with your actual GitHub username)*

### Step 3: Add All Files
```bash
git add .
```

### Step 4: Commit Your Changes
```bash
git commit -m "Add Tachyon coaching website with Netlify deployment fix"
```

### Step 5: Push to GitHub
```bash
git push -u origin main
```

## Method 2: If Repository Already Exists

If you already have the repository set up:

```bash
git add .
git commit -m "Fix Netlify deployment - add _redirects copy script"
git push
```

## Method 3: Using GitHub Desktop (GUI Option)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Click "Add an Existing Repository from your Hard Drive"
3. Select your project folder
4. Click "Publish repository" to GitHub
5. Choose public/private and click "Publish Repository"

## What Gets Pushed to GitHub

Your repository will include:
- ✅ All React source code (`client/src/`)
- ✅ Netlify configuration (`netlify.toml`)
- ✅ Build script (`copy-redirects.js`)
- ✅ Documentation (README.md, deployment guides)
- ✅ Package files (`package.json`)
- ❌ `node_modules/` (excluded by .gitignore)
- ❌ `dist/` folder (excluded by .gitignore)

## After Pushing

1. **Verify on GitHub**: Check that all files are visible in your GitHub repository
2. **Connect to Netlify**: Go to Netlify and connect your GitHub repository
3. **Auto-deploy**: Netlify will automatically build and deploy your site

## Troubleshooting

**If you get "remote origin already exists":**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git
```

**If you get authentication errors:**
- Use GitHub Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

**If you get permission denied:**
- Make sure you own the repository
- Check your GitHub username is correct in the URL

Once pushed, your Tachyon website will be ready for Netlify deployment!