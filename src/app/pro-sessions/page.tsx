import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, CreditCard, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pro Sessions | Mock Interview, Job Search Strategy and Resume Rebuild | StaffAnchor',
  description:
    '1:1 video sessions with Gagan Sharma, founder of StaffAnchor, for sales and leadership professionals: a full mock interview, a job search strategy with a resume rebuild, and resume writing.',
  alternates: { canonical: 'https://www.staffanchor.com/pro-sessions' },
};

const BOOK = 'https://clients.staffanchor.com/book';

const SESSIONS = [
  {
    slug: 'mock-interview',
    title: 'Mock interview | Sales and Leadership Role',
    tagline: 'A real interview, then the feedback nobody gives you.',
    meta: '60 mins · Video meeting',
    price: '₹1,899',
    points: [
      "A full interview loop for the role you're targeting: discovery on your numbers, a scenario on team or pipeline management, and the tough questions on gaps and attrition.",
      "A plain debrief on exactly where you'd have been screened out, and how to fix it.",
      'Bring a specific role or JD if you have one.',
    ],
    href: `${BOOK}/mock-interview?src=staffanchor_site`,
    cta: 'Book this session',
  },
  {
    slug: 'job-search-strategy',
    title: 'Job Search Strategy + Resume Rebuild',
    tagline: "Fix the resume. Then fix how you're using it.",
    meta: '45 mins · Video meeting',
    price: '₹1,999',
    popular: true,
    points: [
      'Your resume rewritten line by line, so it shows numbers, scale, ownership and the levers behind the result.',
      'A sharper LinkedIn headline and About section.',
      'A map of where your next role actually comes from: which companies, which route in, what to say.',
      'Send your resume 24 hours before, so the call is spent on strategy and not on reading.',
    ],
    href: `${BOOK}/job-search-strategy?src=staffanchor_site`,
    cta: 'Book this session',
  },
  {
    slug: 'resume-writing',
    title: 'Resume Writing',
    tagline: 'Written for you by StaffAnchor, ready for applicant tracking systems.',
    meta: 'Delivered in Word and PDF',
    price: 'From ₹999',
    points: ['Priced by experience level, from early career to senior.', 'ATS-friendly structure with role-specific keywords and impact-led bullet points.', 'Revision round included.'],
    href: '/resume-writing',
    cta: 'See resume writing',
  },
];

const STEPS = [
  { icon: CalendarCheck, title: 'Pick a time', text: 'Choose a day and slot that suits you. Times are in India Standard Time.' },
  { icon: CreditCard, title: 'Pay securely', text: 'Pay online with Razorpay. Your slot is held while you pay.' },
  { icon: Video, title: 'Get your invite', text: 'A calendar invite with the Google Meet link lands in your inbox right away.' },
];

export default function ProSessionsPage() {
  return (
    <main>
      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full px-3 py-1 mb-4">
            Pro Sessions
          </span>
          <h1 className="heading-xl mb-4">1:1 sessions to land your next sales role</h1>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
            Practise with a hiring leader, fix your resume, and get a plan for where your next role really comes from. Book a time that suits you and pay securely online.
          </p>
          <a
            href="#sessions"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-ink)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300"
          >
            See the sessions <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      <section id="sessions" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SESSIONS.map((s) => (
              <div key={s.slug} className="flex flex-col bg-white rounded-2xl p-7 border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300">
                <div className="h-6 mb-3">
                  {s.popular && (
                    <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full px-3 py-1">Popular</span>
                  )}
                </div>
                <p className="text-sm text-[var(--color-muted)] mb-2">{s.meta}</p>
                <h2 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-2 tracking-tight">{s.title}</h2>
                <p className="text-[var(--color-ink)] font-medium mb-4">{s.tagline}</p>
                <ul className="space-y-2.5 text-[15px] text-[var(--color-muted)] leading-relaxed mb-6 flex-1 list-disc pl-5">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-line)]">
                  <span className="font-poppins font-semibold text-lg text-[var(--color-ink)]">{s.price}</span>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center justify-center px-5 py-2.5 bg-[var(--color-ink)] text-white text-sm font-semibold rounded-xl hover:bg-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-mist)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-10">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-1">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Image src="/gagan_sir_profile_pic.jpg" alt="Gagan Sharma, Founder of StaffAnchor" width={160} height={160} className="rounded-full object-cover w-36 h-36 shrink-0" />
            <div>
              <h2 className="heading-lg mb-1">Gagan Sharma</h2>
              <p className="text-[var(--color-accent)] font-medium mb-4">Building StaffAnchor | Empowering Revenue Professionals with the Right Opportunities</p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                With 15+ years of experience in scaling high-performing sales teams and driving revenue growth, I have built and led regional and national teams of 400+ across EdTech, AgriTech, Recruitment, and Matrimonial services.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Managing revenues of ₹100 Cr to ₹150 Cr+, my expertise lies in optimizing sales funnels, improving conversions, and building structured, data-driven sales engines that drive sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
