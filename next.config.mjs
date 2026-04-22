/** @type {import('next').NextConfig} */

// Suppress url.parse() deprecation warning coming from dependencies
if (typeof process !== 'undefined') {
  const originalEmitWarning = process.emitWarning;
  process.emitWarning = (warning, ...args) => {
    if (
      (typeof warning === 'string' && warning.includes('url.parse')) ||
      (typeof warning === 'object' && warning.message?.includes('url.parse'))
    ) {
      return;
    }
    originalEmitWarning.call(process, warning, ...args);
  };
}

const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['better-sqlite3'],
}

export default nextConfig
