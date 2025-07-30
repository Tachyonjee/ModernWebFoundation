const fs = require('fs');
const path = require('path');

// Copy _redirects file to build output
const source = path.join(process.cwd(), 'public', '_redirects');
const dest = path.join(process.cwd(), 'dist', 'public', '_redirects');

console.log('🔄 Checking for _redirects file...');

// Ensure destination directory exists
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('📁 Created build directory:', destDir);
}

if (fs.existsSync(source)) {
  fs.copyFileSync(source, dest);
  console.log('✅ _redirects file copied to build output');
} else {
  console.log('❌ _redirects file not found, creating default...');
  
  // Create a default _redirects file
  fs.writeFileSync(dest, '/*    /index.html   200\n');
  console.log('✅ Default _redirects file created');
}

console.log('📍 _redirects setup complete');