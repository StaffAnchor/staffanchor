import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The standalone "volume hiring" page no longer fits the positioning
      // (enterprise sales and leadership hiring); send visitors and search
      // engines to the employer hub.
      { source: '/volume-hiring', destination: '/employers', permanent: true },
    ];
  },
};

export default nextConfig;
