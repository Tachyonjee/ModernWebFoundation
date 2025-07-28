# 🔄 Auto-Push Setup for Tachyon Website

## What This Does

The `auto_push.sh` script automatically:
1. ✅ Builds your Tachyon website
2. ✅ Commits any changes to Git
3. ✅ Pushes to your GitHub repository
4. ✅ Triggers Netlify auto-deployment

## Initial Setup (One-time)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Create new repository named `tachyon-website`
3. Copy the repository URL

### Step 2: Configure Git Remote
Run this command in Replit Shell (replace YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git
```

### Step 3: First Push
```bash
./auto_push.sh
```

## How to Use

### Manual Trigger
Whenever you want to sync your changes:
```bash
./auto_push.sh
```

### Auto-trigger on Replit Run
Add this to your main development workflow by running it after making changes.

## What Gets Synced

✅ **Included in sync:**
- All React source code
- Component updates
- Style changes
- Configuration files
- Documentation updates

❌ **Excluded from sync:**
- `node_modules/` folder
- `dist/` build folder (rebuilds on Netlify)
- Temporary files

## Success Flow

```
Replit Changes → auto_push.sh → GitHub → Netlify → Live Website
```

1. **You make changes** in Replit
2. **Run script** - `./auto_push.sh`
3. **Auto-commit** with timestamp
4. **Push to GitHub** repository
5. **Netlify detects** GitHub changes
6. **Auto-deploys** your website
7. **Live site updated** within 2-3 minutes

## Troubleshooting

**"No remote repository configured"**
- Run: `git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git`

**"Build failed"**
- Fix any code errors first
- Script won't push broken code

**"Failed to push to GitHub"**
- Check GitHub credentials
- Verify repository exists and is accessible

## Benefits

- 🚀 **Instant deployment** - Changes go live automatically
- 🔒 **Safe pushing** - Only pushes if build succeeds
- 📝 **Auto-commit messages** - Timestamps for easy tracking
- 🌐 **Seamless workflow** - Code → Push → Deploy in one command

Your Tachyon website will stay perfectly synced across Replit, GitHub, and Netlify!