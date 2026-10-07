import type { Metadata } from 'next';
import LegalPage from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | StaffAnchor',
  description: 'How StaffAnchor Talent Solutions collects, uses and protects personal information, including WhatsApp messaging.',
  alternates: { canonical: 'https://staffanchor.com/privacy' },
};

const list = (items: string[]) => (
  <ul className="list-disc pl-6 space-y-1.5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro={
        <>
          <p>
            StaffAnchor Talent Solutions (&ldquo;StaffAnchor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a recruitment firm that connects sales professionals with employers.
            This policy explains what personal information we collect, why, how we protect it, and the choices you have. It applies to staffanchor.com,
            jobs.staffanchor.com, clients.staffanchor.com and our messages to you, including WhatsApp.
          </p>
          <p>We handle personal information in line with the laws of India, including the Digital Personal Data Protection Act, 2023.</p>
        </>
      }
      sections={[
        {
          title: 'Information we collect',
          body: (
            <>
              <p>Depending on how you use StaffAnchor, we may collect:</p>
              {list([
                'Candidates: name, phone number, email, location, current and expected pay, notice period, work history, skills, your resume, and answers you give us about your sales experience.',
                'Employers: name, work email, phone, company and role details, and the hiring requirements you share.',
                'Referral partners (Sales Circle): name, contact details, professional background, and, for payouts, PAN and bank details.',
                'Everyone: messages you send us, call notes from conversations with our recruiters, and basic usage data such as device and pages visited (through analytics tools).',
              ])}
            </>
          ),
        },
        {
          title: 'How we use it',
          body: (
            <>
              {list([
                'To match candidates to roles, assess fit and put forward shortlists to employers.',
                'To contact you about opportunities, interviews, applications and your account, by phone, email and WhatsApp.',
                'To verify details you give us and keep our records accurate.',
                'To run payouts for referral partners and meet legal and tax obligations.',
                'To improve our service, keep it secure and prevent misuse.',
              ])}
              <p>
                We use software, including AI tools, to read resumes and help rank candidates for roles. A person at StaffAnchor reviews and decides before a candidate is
                put forward to an employer.
              </p>
            </>
          ),
        },
        {
          title: 'WhatsApp and other messages',
          body: (
            <>
              <p>
                If you give us your phone number, for example by registering or applying, we may message you on WhatsApp about jobs, your application and interview scheduling.
                We only send job-related messages to people who have asked us to or agreed to hear from us.
              </p>
              <p>
                You can stop at any time by replying <strong>STOP</strong> to a message, or by writing to us at the address below. We will then stop messaging you on that channel.
              </p>
              <p>
                WhatsApp messages are sent through the WhatsApp Business Platform operated by Meta Platforms. Meta processes messages to deliver them, under its own terms and
                privacy policy.
              </p>
            </>
          ),
        },
        {
          title: 'Who we share information with',
          body: (
            <>
              <p>We do not sell your personal information. We share it only as needed:</p>
              {list([
                'Employers, when we put a candidate forward for a role. A candidate profile is shared with a client only for roles we are working on with that client.',
                'Service providers who help us run StaffAnchor, such as cloud hosting, database, email and messaging, analytics, and AI processing providers. They may use the information only to provide their service to us.',
                'Authorities or advisers, where the law requires it or to protect legal rights.',
              ])}
            </>
          ),
        },
        {
          title: 'How long we keep it',
          body: (
            <p>
              We keep candidate information for as long as it is useful for recruitment and for any period the law requires, and then delete or anonymise it. You can ask us to delete
              your information earlier (see &ldquo;Your choices&rdquo;).
            </p>
          ),
        },
        {
          title: 'Security',
          body: (
            <p>
              We use access controls, encryption in transit, and limits on who inside StaffAnchor can see candidate and client information. No system is completely secure, but we work
              to protect what you trust us with and to act quickly if something goes wrong.
            </p>
          ),
        },
        {
          title: 'Your choices and rights',
          body: (
            <>
              <p>You can ask us to:</p>
              {list([
                'tell you what information we hold about you, and give you a copy;',
                'correct information that is wrong or out of date;',
                'delete your information, and stop using it;',
                'withdraw your consent to being contacted, including on WhatsApp.',
              ])}
              <p>To make a request, or to raise a concern, write to the contact below. We will respond within a reasonable time and, where required, within the time set by law.</p>
            </>
          ),
        },
        {
          title: 'Children',
          body: <p>StaffAnchor is for working professionals aged 18 and over. We do not knowingly collect information from anyone under 18.</p>,
        },
        {
          title: 'Changes to this policy',
          body: <p>We may update this policy from time to time. The date at the top shows when it was last changed. If we make a significant change, we will tell you.</p>,
        },
        {
          title: 'Contact us',
          body: (
            <>
              <p>
                StaffAnchor Talent Solutions
                <br />
                Email: <a href="mailto:info@staffanchor.com" className="underline">info@staffanchor.com</a>
                <br />
                Phone: <a href="tel:+917273000088" className="underline">+91 72730 00088</a>
              </p>
              <p>Write to us for any privacy request, question or complaint, and mark it &ldquo;Privacy&rdquo;.</p>
            </>
          ),
        },
      ]}
    />
  );
}
