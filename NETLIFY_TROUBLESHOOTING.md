# 🚨 Netlify Deployment Troubleshooting

## Most Common Issues & Solutions

### Issue 1: Build Fails - "Command not found"

**If Netlify shows "vite: command not found":**

Change your Netlify build settings to:
- **Build command**: `npx vite build`
- **Publish directory**: `dist/public`
- **Base directory**: (leave empty)

### Issue 2: Build Succeeds but Site Shows 404

**If build succeeds but site is blank/404:**

1. Check your publish directory is exactly: `dist/public`
2. Verify files exist after build by checking build logs
3. Look for this in your Netlify build log:
   ```
   ✓ built in 5.78s
   ../dist/public/index.html
   ../dist/public/assets/
   ```

### Issue 3: React Router Pages Show 404

**If only homepage works but /courses etc. show 404:**

The `_redirects` file should be in your build output. Check that `dist/public/_redirects` exists with:
```
/*    /index.html   200
```

### Issue 4: Environment/Node Version Issues

**If build fails with Node version errors:**

Add these environment variables in Netlify:
- `NODE_VERSION`: `18`
- `NPM_VERSION`: `9`

### Issue 5: Assets Not Loading

**If CSS/JS files show 404:**

Check that your built `dist/public/` folder contains:
```
dist/public/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── _redirects
```

## Alternative Deployment Methods

### Method A: Force Netlify to Recognize Files

Try this exact build command in Netlify:
```bash
npm ci && npx vite build && ls -la dist/public/
```

### Method B: Manual Upload Test

1. Build locally: `npx vite build`
2. Zip the entire `dist/public` folder contents
3. Go to Netlify → Sites → Drag & Drop the ZIP contents

### Method C: Different Netlify Configuration

Create a new `netlify.toml` with more explicit settings:

```toml
[build]
  publish = "dist/public"
  command = "npm ci && npx vite build"
  
[build.environment]
  NODE_VERSION = "18.18.0"
  NPM_VERSION = "9.8.1"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.html]
  pretty_urls = true
```

## Debug Steps

1. **Check Netlify Build Log**: Look for exact error messages
2. **Verify File Structure**: Ensure `dist/public/index.html` exists after build
3. **Test Locally**: Run `npx vite build` and open `dist/public/index.html` in browser
4. **Check Deploy Context**: Make sure you're deploying from the correct branch (main/master)

## Common Error Messages & Fixes

| Error | Solution |
|-------|----------|
| "No index.html found" | Check publish directory is `dist/public` |
| "Build command failed" | Change to `npx vite build` |
| "Site not found" | Verify repository connection |
| "Module not found" | Add `npm ci &&` before build command |

## If Nothing Works

Try creating a fresh Netlify site:
1. Delete current Netlify site
2. Create new site from same GitHub repo
3. Use these exact settings:
   - Base directory: (empty)
   - Build command: `npx vite build`
   - Publish directory: `dist/public`

The issue is likely one of these common configuration problems. Check each solution systematically.