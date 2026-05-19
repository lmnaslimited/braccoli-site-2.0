import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
     {
        source: "/:locale(en|de)/blog",
        destination: "http://localhost:3001/:locale",
      },
      {
        source: "/:locale(en|de)/blog/:path+",
        destination: "http://localhost:3001/:locale/:path+",
      },
       {
  source: "/blog-static/:path*",
  destination: "http://localhost:3001/blog-static/:path*",
},
      {
        source: "/:locale(en|de)?/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/:locale(en|de)?/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/:locale(en|de)?/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com"},
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

export default nextConfig;
