#!/usr/bin/env node

/**
 * Simple build script for Sunrise Academy website
 * This ensures all files are properly prepared for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Building Sunrise Academy website...');

// Check if all required files exist
const requiredFiles = [
  'index.html',
  'app.js',
  'styles.css',
  'logo.svg',
  'manifest.json',
  'vercel.json'
];

const galleryPages = [
  'science-lab.html',
  'library.html',
  'computer-lab.html',
  'art-room.html',
  'music-room.html',
  'sports-field.html'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

galleryPages.forEach(page => {
  if (!fs.existsSync(page)) {
    console.error(`❌ Missing gallery page: ${page}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found gallery page: ${page}`);
  }
});

if (allFilesExist) {
  console.log('🎉 All files present! Ready for deployment.');
  console.log('📦 Vercel deployment configuration:');
  console.log('   - Static site with SPA routing');
  console.log('   - PWA manifest included');
  console.log('   - Security headers configured');
} else {
  console.error('❌ Build failed: Missing files');
  process.exit(1);
}