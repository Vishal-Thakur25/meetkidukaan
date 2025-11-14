/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
