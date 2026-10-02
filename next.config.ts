import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The standalone "volume hiring" page no longer fits the positioning
      // (enterprise sales and leadership hiring); send visitors and search
      // engines to the employer hub.
      { source: '/volume-hiring', destination: '/employers', permanent: true },
      // The old combined page was split into RPO and Managed Sales Teams.
      { source: '/employers/dedicated-sales-teams', destination: '/employers/recruitment-process-outsourcing', permanent: true },
    ];
  },
};

export default nextConfig;
