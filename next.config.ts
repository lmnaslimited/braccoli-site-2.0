import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
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
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NODE_ENV === "development"
      ? "6LdPdRkrAAAAAOoXRoaPA4RLQvgTuuqFZZlqkzR2"
      : "6LfALd4qAAAAACBjDTQWkmyh-WqbLb6yhbcm-UUA"
  },
};

export default nextConfig;
