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
    swcMinify: true,
    output: 'standalone',
    images:{
      formats:['image/webp'],
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com/lmnas/image/fetch/',
      domains: ["res.cloudinary.com"],

    },
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en',
    },

};

export default nextConfig;
