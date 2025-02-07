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

};

export default nextConfig;
