import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generates a standalone production build for Docker/server deployments.
  // output: "standalone",

  // Prevents automatic redirects between trailing slash and non-trailing slash URLs.
  // Example:
  // /about and /about/ will both work without redirecting.
  skipTrailingSlashRedirect: true,

  async rewrites() {
    return [
      // Routes localized blog pages to the blog service running on port 3001.
      {
        source: "/:locale(en|de)/blog",
        destination: "http://localhost:3001/:locale",
      },

      // Routes localized blog subpages dynamically to the blog service.
      {
        source: "/:locale(en|de)/blog/:path+",
        destination: "http://localhost:3001/:locale/:path+",
      },

      // Serves static blog assets from the external blog application.
      {
        source: "/blog-static/:path*",
        destination: "http://localhost:3001/blog-static/:path*",
      },

      // Proxies PostHog static asset requests through the application.
      {
        source: "/:locale(en|de)?/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },

      // Proxies PostHog array ingestion requests.
      {
        source: "/:locale(en|de)?/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },

      // Proxies all remaining PostHog analytics requests.
      {
        source: "/:locale(en|de)?/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },

  // Enables additional React checks during development.
  reactStrictMode: true,

  images: {
    // Allows Next.js Image component to optimize images from trusted external domains.
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },

  env: {
    // Uses different Google reCAPTCHA site keys based on the environment.
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
      process.env.NODE_ENV === "development"
        ? "6LeHPQ0rAAAAAHTN_Ya-NIc5M4lScSP3vu6OCYYy"
        : "6LfALd4qAAAAACBjDTQWkmyh-WqbLb6yhbcm-UUA",
  },
};

export default nextConfig;