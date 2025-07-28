# 🎯 EXACT Netlify Settings for Tachyon Website

## Copy These Settings Exactly

### In Netlify Dashboard → Site Settings → Build & Deploy:

**Repository Settings:**
- Repository: `https://github.com/YOUR_USERNAME/tachyon-website`
- Branch to deploy: `main` (or `master`)

**Build Settings:**
- Base directory: ` ` (LEAVE COMPLETELY EMPTY)
- Build command: `npx vite build`
- Publish directory: `dist/public`

**Environment Variables (optional but recommended):**
- `NODE_VERSION`: `18.18.0`
- `NPM_VERSION`: `9.8.1`

## Alternative Build Commands (Try These If First Fails)

If `npx vite build` fails, try these in order:

1. `npm install && npx vite build`
2. `npm ci && npx vite build`  
3. `yarn install && yarn build` (if using Yarn)

## Verification Checklist

After deployment, your Netlify build log should show:
```
✓ 393 modules transformed.
../dist/public/index.html                   1.05 kB
../dist/public/assets/index-[hash].css     76.00 kB  
../dist/public/assets/index-[hash].js     357.92 kB
✓ built in ~6s
```

Your deployed site should have these files:
- `index.html` (main page)
- `assets/index-[hash].css` (styles)
- `assets/index-[hash].js` (JavaScript)
- `_redirects` (for routing)

## If Still Not Working

1. **Check GitHub Repository**: Ensure all files are pushed to GitHub
2. **Verify Branch**: Make sure Netlify is deploying from correct branch
3. **Check Build Logs**: Look for specific error messages in Netlify dashboard
4. **Try Manual Deploy**: 
   - Build locally: `npx vite build`
   - Drag `dist/public` folder contents to Netlify

## Success Indicators

✅ Build completes without errors  
✅ Site loads at your Netlify URL  
✅ All pages work (Home, Courses, etc.)  
✅ No 404 errors on page refresh  
✅ CSS and animations load correctly  

Your Tachyon website should be live once these settings are applied correctly!