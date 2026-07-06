'use client';

import HeroSection from '@/components/ui/HeroSection';
import ContactForm from '@/components/ui/ContactForm';
import { submitContactForm } from '@/utils/googleSheets';

const faqs = [
  {
    q: 'How fast will I hear back?',
    a: 'Within one business day. Employer mandates and candidate profile questions both go straight to our recruiting team.',
  },
  {
    q: 'Do I need to submit a full profile or mandate before contacting you?',
    a: 'No — this form is for general questions. If you’re ready to submit a hiring mandate or build your profile, use the dedicated pages linked in the nav.',
  },
  {
    q: 'Is my information shared with anyone?',
    a: 'No. Messages sent here go only to StaffAnchor’s internal team, never to a third party or employer without your knowledge.',
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Get in touch"
        headline="Let's Talk."
        subtext="Questions about hiring, your profile, or anything else — reach out directly."
        centered={true}
      />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="anchor-line">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-1">Email</p>
                <a href="mailto:info@staffanchor.com" className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  info@staffanchor.com
                </a>
              </div>
              <div className="anchor-line">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-1">Phone</p>
                <a href="tel:+917273000088" className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  +91 7273000088
                </a>
              </div>
              <div className="anchor-line">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-1">Connect</p>
                <a
                  href="https://linkedin.com/company/staffanchor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm onSubmit={submitContactForm} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="eyebrow mb-3 block">FAQ</span>
          <h2 className="heading-lg mb-10">A few common questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-[var(--color-line)] p-6">
                <h3 className="font-poppins font-semibold text-[var(--color-ink)] mb-2">{f.q}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
