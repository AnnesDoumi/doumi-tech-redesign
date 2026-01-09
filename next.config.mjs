/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  swcMinify: true,
  compiler: {
    // in Prod Konsolenlogs entfernen (spart JS)
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {

    optimizeCss: true,
    // Falls deine Next-Version meckert, diese Zeile einfach löschen.
  },
}

export default nextConfig
