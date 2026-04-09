/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export'

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'tramway.proxy.rlwy.net',
      },
    ],
    unoptimized: true,
  },
  // Configuración optimizada para producción
  experimental: {},
  poweredByHeader: false,
  // Solo aplicar configuración de export cuando se solicite explícitamente.
  exportPathMap: undefined,
  trailingSlash: false,
  // Configuración específica para deployment
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  }
}

module.exports = nextConfig