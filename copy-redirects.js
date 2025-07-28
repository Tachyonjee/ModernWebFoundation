import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// Copy _redirects file to build output
const source = join(process.cwd(), 'public', '_redirects');
const dest = join(process.cwd(), 'dist', 'public', '_redirects');

if (existsSync(source)) {
  copyFileSync(source, dest);
  console.log('✅ _redirects file copied to build output');
} else {
  console.log('❌ _redirects file not found in public directory');
}