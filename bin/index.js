#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify the project name:');
  console.error('  npx create-react-train-02-app my-app');
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
  console.error(`Directory ${projectName} already exists!`);
  process.exit(1);
}

console.log(`Creating a new React app in ${targetDir}...`);

// Copy template
const templateDir = path.join(__dirname, '..', 'template');
copyDir(templateDir, targetDir);

// Update package.json
const packageJsonPath = path.join(targetDir, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.name = projectName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Installing dependencies...');
execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

console.log('');
console.log('Success! Created', projectName, 'at', targetDir);
console.log('');
console.log('Inside that directory, you can run several commands:');
console.log('');
console.log('  npm run dev');
console.log('    Starts the development server.');
console.log('');
console.log('  npm run build');
console.log('    Bundles the app into static files for production.');
console.log('');
console.log('  npm test');
console.log('    Starts the test runner.');
console.log('');
console.log('We suggest that you begin by typing:');
console.log('');
console.log('  cd', projectName);
console.log('  npm run dev');
console.log('');
console.log('Happy hacking!');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}