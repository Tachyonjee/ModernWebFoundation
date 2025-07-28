# 🚀 Quick Deploy Guide - Tachyon Website

## Step-by-Step Netlify Deployment

### Method 1: GitHub + Netlify (Recommended)

1. **Create GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `tachyon-website` or similar
   - Make it public
   - Do NOT initialize with README (we already have one)

2. **Upload Your Code to GitHub**
   - Download/clone your current project files
   - In terminal/command prompt, navigate to your project folder
   - Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Tachyon coaching website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tachyon-website.git
   git push -u origin main
   ```

3. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose "GitHub" and authorize Netlify
   - Select your `tachyon-website` repository
   - Configure build settings:
     - **Build command**: `vite build`
     - **Publish directory**: `dist/public`
   - Click "Deploy site"

4. **Your site is live!** 
   - Netlify will give you a URL like `https://amazing-name-123456.netlify.app`
   - You can customize the subdomain in Site settings

### Method 2: Direct Upload (Fastest)

1. **Build locally**
   ```bash
   npm install
   npx vite build
   ```

2. **Upload to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sites" → "Add new site" → "Deploy manually"
   - Drag and drop the `dist/public` folder
   - Done! Your site is live

## ✅ What's Already Set Up

- ✅ **Build configuration** - `netlify.toml` configured
- ✅ **Client-side routing** - `_redirects` file for React Router
- ✅ **SEO optimization** - Meta tags and descriptions
- ✅ **Mobile responsive** - Works on all devices
- ✅ **Fast loading** - Optimized build with code splitting

## 🔧 Troubleshooting

### Build Fails?
- Make sure Node.js version 18+ is used
- Delete `node_modules` folder and run `npm install`

### 404 Errors?
- The `_redirects` file should handle this automatically
- If issues persist, check Netlify deploy logs

### Blank Page?
- Check browser console for JavaScript errors
- Verify all files built correctly in `dist/public/`

## 🎯 Success Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Netlify connected to repository
- [ ] Build settings configured correctly
- [ ] Site deployed successfully
- [ ] All pages load correctly
- [ ] Mobile responsiveness works
- [ ] Contact form displays properly

## 📞 Support

If you need help with deployment:
1. Check the build logs in Netlify dashboard
2. Look for error messages in browser console
3. Verify all files are present in the built `dist/public` folder

Your Tachyon website is now ready to showcase your JEE/NEET coaching institute to students in Baramati and beyond! 🎉