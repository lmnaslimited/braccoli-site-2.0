import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // output: "standalone",
  async rewrites() {
    return [
      {
        source: "/en/blog",
        destination: `http://localhost:3001/`,
      },
      {
        source: "/en/blog/:path+",
        destination: `http://localhost:3001/:path+`,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
      process.env.NODE_ENV === "development"
        ? "6LeHPQ0rAAAAAHTN_Ya-NIc5M4lScSP3vu6OCYYy"
        : "6LfALd4qAAAAACBjDTQWkmyh-WqbLb6yhbcm-UUA",
  },
};

export default withBundleAnalyzer(nextConfig);
