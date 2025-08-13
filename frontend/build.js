#!/usr/bin/env node

// Custom build script to handle OpenSSL legacy provider
const { spawn } = require('child_process');
const path = require('path');

// Set the legacy OpenSSL provider
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Run react-scripts build
const buildProcess = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' }
});

buildProcess.on('exit', (code) => {
  process.exit(code);
});

buildProcess.on('error', (err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
