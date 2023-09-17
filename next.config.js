/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**/**",
      },
      {
        protocol: "https",
        hostname: "www.screentest.xyz",
        port: "",
        pathname: "/wp-content/uploads/2022/09/**",
      },
      {
        protocol: "https",
        hostname: "variety.com",
        port: "",
        pathname: "/wp-content/uploads/2022/03/**",
      },
    ],
  },
}

module.exports = nextConfig
