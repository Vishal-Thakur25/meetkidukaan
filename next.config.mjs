/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["jsonwebtoken", "bcrypt"],
  },
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
