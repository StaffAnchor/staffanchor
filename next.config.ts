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
      // StaffAnchor Edge lives on the jobs site, where the booking and payment happen. A link that already carries a
      // source tag (for example from LinkedIn) keeps it; any other arrival is tagged as coming from this site.
      { source: '/edge', has: [{ type: 'query', key: 'src' }], destination: 'https://jobs.staffanchor.com/edge', permanent: true },
      { source: '/edge', destination: 'https://jobs.staffanchor.com/edge?src=staffanchor_site', permanent: true },
    ];
  },
};

export default nextConfig;
