import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Employers - StaffAnchor Talent Solutions | Precision-Driven Hiring",
  description: "Hire faster and smarter with our AI-driven search, functional specialists, and consultative methodology. 12-day time to hire, 95% retention rate.",
  keywords: "Employer Services, AI-Driven Hiring, Executive Search, Functional Hiring, Industry Expertise, Precision Recruiting",
};

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}