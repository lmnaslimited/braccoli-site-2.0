import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `http://localhost:3001/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `http://localhost:3001/blog/:path+`,
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
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NODE_ENV === "development"
      ? "6LeBgwwrAAAAAAVcQPxVn8hiU4CUBY5nB2hfpFFp"
      : "6LeHPQ0rAAAAAHTN_Ya-NIc5M4lScSP3vu6OCYYy"
  },
};

export default nextConfig;
