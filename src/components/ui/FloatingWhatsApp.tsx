'use client';

import { usePathname } from 'next/navigation';
import { posthog } from '@/lib/posthog';
import { whatsappChatLink } from '@/lib/whatsapp';

// Two WhatsApp buttons, one for employers and one for jobseekers, so each visitor
// opens a chat that starts in the right place. Pages aimed at one audience show only
// that button; neutral pages (home, about, contact, blog) show both, stacked.
// Compact pills on phones, fuller labels from the sm breakpoint up.
type Audience = 'employer' | 'jobseeker';

const EMPLOYER_PATHS = ['/employers', '/sales-hiring', '/leadership-hiring', '/mandate-request', '/interim', '/sales-talent-intelligence'];
const JOBSEEKER_PATHS = ['/jobseekers', '/resume-writing', '/free-tools'];

const startsWithAny = (path: string, bases: string[]) => bases.some((b) => path === b || path.startsWith(`${b}/`));

const BUTTONS: Record<Audience, { text: string; short: string; long: string }> = {
  employer: {
    text: "Hi StaffAnchor, I'd like to hire sales talent. Could someone get in touch?",
    short: "I'm hiring",
    long: 'Hiring? Chat with us',
  },
  jobseeker: {
    text: "Hi StaffAnchor, I'm a sales professional looking for new roles. Could you help?",
    short: "I'm a jobseeker",
    long: 'Job seeker? Chat with us',
  },
};

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 003.2 17.3L2 22l4.8-1.2A11 11 0 1020.5 3.5zm-8.5 17a9 9 0 01-4.6-1.3l-.3-.2-2.8.7.8-2.7-.2-.3a9 9 0 1117.1-4.7 9 9 0 01-10 8.5zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 01-3.7-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 11.9 11.9 0 004.6 4.1c1.7.7 2.4.8 3.2.7a2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const pathname = usePathname() ?? '/';
  const audiences: Audience[] = startsWithAny(pathname, EMPLOYER_PATHS)
    ? ['employer']
    : startsWithAny(pathname, JOBSEEKER_PATHS)
      ? ['jobseeker']
      : ['employer', 'jobseeker'];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {audiences.map((a) => {
        const b = BUTTONS[a];
        return (
          <a
            key={a}
            href={whatsappChatLink(b.text)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${b.long} on WhatsApp`}
            onClick={() => {
              try {
                posthog.capture('whatsapp_entry_click', { source: `site_floating_${a}`, path: pathname });
              } catch {
                // analytics must never block opening the chat
              }
            }}
            className="flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-[13px] font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-[#1fb857] sm:h-12 sm:px-5 sm:text-sm"
          >
            <WhatsAppIcon />
            <span className="sm:hidden">{b.short}</span>
            <span className="hidden sm:inline">{b.long}</span>
          </a>
        );
      })}
    </div>
  );
}
