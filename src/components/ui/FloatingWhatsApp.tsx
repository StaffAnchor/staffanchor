'use client';

import { usePathname } from 'next/navigation';
import { posthog } from '@/lib/posthog';
import { whatsappChatLink } from '@/lib/whatsapp';

// A WhatsApp button that stays on screen on every page, so a question is one tap away,
// on phones especially. The first message is worded for the page: employers get an
// employer message, everyone else a candidate message. It sits above the existing
// sticky "Find Jobs" button so the two never overlap.
export default function FloatingWhatsApp() {
  const pathname = usePathname() ?? '/';
  const isEmployerPage = pathname.startsWith('/employers') || pathname.startsWith('/sales-hiring') || pathname.startsWith('/leadership-hiring') || pathname.startsWith('/mandate-request');
  const text = isEmployerPage
    ? "Hi StaffAnchor, I'd like to hire sales talent. Could someone get in touch?"
    : "Hi StaffAnchor, I'm a sales professional looking for new roles. Could you help?";
  const source = `site_floating${isEmployerPage ? '_employer' : ''}`;

  return (
    <a
      href={whatsappChatLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with StaffAnchor on WhatsApp"
      onClick={() => {
        try {
          posthog.capture('whatsapp_entry_click', { source, path: pathname });
        } catch {
          // analytics must never block opening the chat
        }
      }}
      className="fixed bottom-28 right-6 z-50 flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 font-semibold text-white shadow-xl shadow-emerald-900/25 transition hover:bg-[#1fb857] sm:px-5"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 003.2 17.3L2 22l4.8-1.2A11 11 0 1020.5 3.5zm-8.5 17a9 9 0 01-4.6-1.3l-.3-.2-2.8.7.8-2.7-.2-.3a9 9 0 1117.1-4.7 9 9 0 01-10 8.5zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 01-3.7-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 11.9 11.9 0 004.6 4.1c1.7.7 2.4.8 3.2.7a2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.6-.3z" />
      </svg>
      <span className="hidden text-sm sm:inline">Chat with a recruiter</span>
    </a>
  );
}
