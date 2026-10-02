import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Employers | Enterprise Sales Hiring and Leadership Search | StaffAnchor",
  description: "Verified enterprise sales shortlists and leadership search for B2B technology companies in India.",
  keywords: "enterprise sales hiring, sales leadership search, B2B sales recruitment India, account executive recruitment",
  openGraph: {
    title: "For Employers | StaffAnchor Talent Solutions",
    description: "Verified enterprise sales shortlists and leadership search for B2B technology companies in India.",
    url: "https://www.staffanchor.com/employers",
  },
  alternates: { canonical: "https://www.staffanchor.com/employers" },
};

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}