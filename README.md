# Tachyon Coaching Institute

A professional React web application for Tachyon, a JEE/NEET coaching institute in Baramati, Maharashtra. The website showcases how the institute brings Hyderabad's teaching excellence and infrastructure to Baramati.

## 🚀 Features

- **Modern React Application** - Built with TypeScript, Vite, and Framer Motion
- **Responsive Design** - Optimized for all devices
- **Course Programs**: 
  - Foundation (8th-10th grade)
  - Enthuse (11th grade)
  - Aspire (12th grade) 
  - Rank Booster (Droppers)
- **Success Stories** - Real JEE/NEET testimonials
- **Blog Section** - Preparation tips and strategies
- **Contact Integration** - Easy admission inquiries

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🌐 Live Demo

[Visit Tachyon Website](https://your-netlify-url.netlify.app)

## 📦 Deployment to Netlify

### Method 1: Direct Netlify Deploy

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Import this project in Netlify
4. Set build settings:
   - **Build command**: `vite build` 
   - **Publish directory**: `dist/public`
5. Deploy!

### Method 2: Manual Build & Deploy

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tachyon-website.git
   cd tachyon-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npx vite build
   ```

4. The built files will be in `dist/public/` - upload this folder to Netlify

### Method 3: Using the Build Script

```bash
chmod +x build.sh
./build.sh
```

## 🔧 Development

To run locally:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/src/           # React application source
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── ...
├── public/              # Static assets
├── dist/public/         # Built files (after build)
├── netlify.toml         # Netlify configuration
└── _redirects          # Client-side routing support
```

## 🎯 About Tachyon

Tachyon Coaching Institute brings Hyderabad's proven teaching methodologies and world-class infrastructure to Baramati, Maharashtra. We specialize in JEE Main, JEE Advanced, and NEET preparation with:

- Expert faculty from top coaching institutes
- Modern infrastructure and technology
- Proven track record of success
- Personalized attention and mentoring

**Location**: Near Vidya Vikas Circle, Baramati, Maharashtra 413102
**Contact**: +91 98765 43210 | info@tachyonbaramati.com

---

Built with ❤️ for aspiring engineers and doctors