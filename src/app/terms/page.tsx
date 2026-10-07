import type { Metadata } from 'next';
import LegalPage from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use | StaffAnchor',
  description: 'The terms for using StaffAnchor Talent Solutions websites and services.',
  alternates: { canonical: 'https://staffanchor.com/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 2026"
      intro={
        <p>
          These terms apply when you use the StaffAnchor Talent Solutions websites (staffanchor.com, jobs.staffanchor.com, clients.staffanchor.com) and our recruitment services.
          By using them you agree to these terms and to our Privacy Policy.
        </p>
      }
      sections={[
        {
          title: 'What we do',
          body: (
            <p>
              StaffAnchor is a recruitment firm focused on sales and commercial roles. We introduce candidates to employers. We do not guarantee that any candidate will be hired,
              interviewed or shortlisted, or that an employer will be able to hire through us.
            </p>
          ),
        },
        {
          title: 'Your information',
          body: (
            <p>
              Please give us accurate and current information. If you share information about another person, such as a referral, you confirm that they know and agree to be
              contacted. We may rely on what you tell us, and we may verify it.
            </p>
          ),
        },
        {
          title: 'Messages and contact',
          body: (
            <p>
              By giving us your phone number or email you agree that we may contact you about jobs, applications and interviews, including on WhatsApp. You can opt out at any time
              by replying STOP or writing to us.
            </p>
          ),
        },
        {
          title: 'Acceptable use',
          body: (
            <p>
              Do not misuse our services. That includes giving false information, uploading content you do not have the right to share, trying to access other people&apos;s
              accounts or data, scraping our sites, or using our services to send unsolicited messages.
            </p>
          ),
        },
        {
          title: 'Employers and fees',
          body: (
            <p>
              Fees, payment terms and candidate-protection terms for employers are set out in the written agreement or proposal between the employer and StaffAnchor. Where those
              terms differ from this page, that agreement applies.
            </p>
          ),
        },
        {
          title: 'Referral partners',
          body: (
            <p>
              Sales Circle referral partners are paid only as set out in the payout terms shown to them for each role. Payouts depend on the referred candidate joining and meeting the
              conditions stated for that role. Partners are independent introducers, not employees or agents of StaffAnchor.
            </p>
          ),
        },
        {
          title: 'Our content',
          body: <p>The StaffAnchor name, logo and the content of our sites belong to StaffAnchor Talent Solutions. You may not copy or reuse them without our written permission.</p>,
        },
        {
          title: 'Limits of liability',
          body: (
            <p>
              Our services are provided as they are. To the extent the law allows, StaffAnchor is not liable for indirect or consequential losses, or for decisions made by employers
              or candidates. Nothing in these terms limits any liability that cannot be limited by law.
            </p>
          ),
        },
        {
          title: 'Changes and governing law',
          body: (
            <p>
              We may update these terms from time to time; the date above shows the latest version. These terms are governed by the laws of India, and the courts of competent
              jurisdiction in India will handle any dispute.
            </p>
          ),
        },
        {
          title: 'Contact',
          body: (
            <p>
              StaffAnchor Talent Solutions, <a href="mailto:info@staffanchor.com" className="underline">info@staffanchor.com</a>, <a href="tel:+917273000088" className="underline">+91 72730 00088</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
