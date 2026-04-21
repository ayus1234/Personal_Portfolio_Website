const { spawn } = require('child_process');
const path = require('path');

// Force-suppress Node.js deprecation warnings (especially url.parse)
process.env.NODE_OPTIONS = (process.env.NODE_OPTIONS || '') + ' --no-deprecation';

// Get arguments passed to the script (e.g., 'dev', 'build', 'start')
const args = process.argv.slice(2);

// Determine the path to the Next.js binary
const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', 'next');

console.log(`[Suppressor] Starting Next.js with NODE_OPTIONS="${process.env.NODE_OPTIONS}"`);

// Spawn the next process
const child = spawn(nextBin, args, {
  stdio: 'inherit',
  shell: process.platform === 'win32' // Required for correctly handling .bin/next on Windows
});

child.on('exit', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('[Suppressor] Failed to start Next.js process:', err);
  process.exit(1);
});
