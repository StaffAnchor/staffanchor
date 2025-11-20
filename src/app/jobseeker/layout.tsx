import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Job Seekers - StaffAnchor Talent Solutions | Your Next Opportunity Curated by Experts",
  description: "500+ placements, 80% satisfaction, 30+ leadership transitions. Upload your profile and get curated opportunities.",
  keywords: "Job Opportunities, Career Services, Job Search, Professional Opportunities, Career Advancement",
};

export default function JobSeekersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}