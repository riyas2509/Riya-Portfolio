import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
