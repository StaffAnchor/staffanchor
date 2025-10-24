import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - StaffAnchor Talent Solutions | Let's Build Your Next Great Team",
  description: "Get in touch with StaffAnchor for executive search, functional hiring, and industry expertise. Email: info@staffanchor.com, Phone: +91 7273000088",
  keywords: "Contact StaffAnchor, Recruitment Consultation, Hiring Services Contact, Executive Search Inquiry",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}