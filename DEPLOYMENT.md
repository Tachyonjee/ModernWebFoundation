# Deployment Guide - Tachyon Website

## Quick Deploy to Netlify

### Option 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Tachyon website"
   git branch -M main
   git remote add origin https://github.com/yourusername/tachyon-website.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - **Build command**: `vite build`
     - **Publish directory**: `dist/public`
   - Click "Deploy site"

### Option 2: Direct Upload

1. **Build locally**:
   ```bash
   npm install
   npx vite build
   ```

2. **Upload to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder

## Configuration Files

### netlify.toml
```toml
[build]
  publish = "dist/public"
  command = "vite build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### _redirects (for client-side routing)
```
/*    /index.html   200
```

## Troubleshooting

### Build Fails
- Check Node.js version (use 18.x)
- Delete `node_modules` and run `npm install`
- Check for TypeScript errors: `npx tsc --noEmit`

### 404 Errors
- Ensure `_redirects` file is in public/ directory
- Check netlify.toml redirects configuration

### Blank Page
- Check browser console for errors
- Verify all assets are loading correctly
- Check if base URL is set correctly in vite.config.ts

## Environment Variables

Currently no environment variables are needed for basic deployment. All data is static.

## Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings
2. Click "Change site name" for subdomain
3. For custom domain: Domain management > Add custom domain

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Modern image formats
- ✅ Lazy loading
- ✅ Minified CSS/JS

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+