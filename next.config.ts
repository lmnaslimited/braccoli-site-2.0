import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `http://localhost:3001/`,
      },
      {
        source: "/blog/:path+",
        destination: `http://localhost:3001/:path+`,
      },
      // {
      //   source: "/site",
      //   destination: `/`,
      // },
    ];
  },
    reactStrictMode: true,
    images: {
      remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    },
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en',
    },

};

export default nextConfig;
