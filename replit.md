# Tachyon Coaching Institute Website

## Overview
Professional React web application for Tachyon, a JEE/NEET coaching institute in Baramati, Maharashtra. The website showcases how the institute brings Hyderabad's teaching excellence and infrastructure to Baramati.

## Project Architecture
- **Frontend**: React 18 with TypeScript, Vite build tool
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM for client-side navigation
- **Icons**: Lucide React and React Icons
- **Deployment**: Configured for Netlify with static site generation

## Recent Changes
- **July 30, 2025**: Complete Flask Backend System + Brand Enhancement
  - **NEW**: Complete Flask + SQLite backend for enquiry and admission forms
    - Created scalable enquiry system with 7 course segments (JEE, NEET, Foundation, etc.)
    - Built admin dashboard with statistics and filtering capabilities
    - Implemented form validation and error handling
    - Added API endpoints for React frontend integration
  - **ADDED**: Professional ContactForm component with real-time validation
  - **CREATED**: Complete Contact page with interactive elements and FAQ section
  - **ENHANCED**: Brand logo integration with clean text styling (blue "achyo" in navbar for visibility)
  - **COMPLETED**: Full-stack enquiry system ready for production with both HTML forms and React integration

- **July 28, 2025**: Fixed GitHub + Netlify deployment setup
  - Created `netlify.toml` with correct build configuration
  - Updated build process to generate static files in `dist/public/`
  - Added comprehensive deployment documentation
  - Fixed HTML title and meta description for SEO
  - Created GitHub Actions workflow for automated deployment
  - **FIXED**: Added `copy-redirects.js` script to ensure `_redirects` file is copied during build
  - **RESOLVED**: Netlify deployment issue - missing `_redirects` file was causing routing failures
  - **FIXED**: Updated build command to use shell commands instead of Node script for better Netlify compatibility
  - **NEW**: Created `auto_push.sh` script for automatic GitHub syncing and Netlify deployment
  - All deployment files tested and working correctly

## User Preferences
- Target audience: JEE/NEET aspirants and parents in Baramati area
- Branding: Emphasize "Hyderabad's Excellence, Now in Baramati"
- Deployment preference: GitHub + Netlify workflow with automatic syncing
- Communication style: Simple, non-technical explanations for deployment
- Workflow preference: Manual sync from Replit to GitHub/Netlify (due to Git restrictions)
- Sync method: Use `./auto_push.sh` or `./sync_now.sh` to push changes

## Key Features
- 4 Course Programs: Foundation (8th-10th), Enthuse (11th), Aspire (12th), Rank Booster (Droppers)
- Success stories with real JEE/NEET testimonials
- Blog section with preparation tips
- Contact information for Baramati location
- Mobile-responsive design with smooth animations

## Deployment Status
✅ **Ready for GitHub + Netlify deployment**
- Build command: `vite build`
- Publish directory: `dist/public`
- Client-side routing configured with `_redirects`
- SEO optimization complete
- All documentation provided

## Contact Information
- Location: Near Vidya Vikas Circle, Baramati, Maharashtra 413102
- Phone: +91 98765 43210
- Emails: info@tachyonbaramati.com, admissions@tachyonbaramati.com