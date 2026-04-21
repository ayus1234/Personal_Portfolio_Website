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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // In a real production app, you would want to be more restrictive.
            // But to clear the browser "Issues" and errors related to eval(),
            // we explicitly allow it here as Next.js dev server requires it.
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' ;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
