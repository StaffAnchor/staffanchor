'use client';

import { posthog } from '@/lib/posthog';
import { whatsappChatLink } from '@/lib/whatsapp';

// "Message us on WhatsApp" with the first message prefilled. `source` records which
// page the tap came from, so we can see which entry points bring people in.
export default function WhatsAppButton({
  text,
  source,
  label = 'Message us on WhatsApp',
  className = '',
}: {
  text: string;
  source: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappChatLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        try {
          posthog.capture('whatsapp_entry_click', { source });
        } catch {
          // analytics must never block opening the chat
        }
      }}
      className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 transition-colors duration-300 ${className}`}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 003.2 17.3L2 22l4.8-1.2A11 11 0 1020.5 3.5zm-8.5 17a9 9 0 01-4.6-1.3l-.3-.2-2.8.7.8-2.7-.2-.3a9 9 0 1117.1-4.7 9 9 0 01-10 8.5zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 01-3.7-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 11.9 11.9 0 004.6 4.1c1.7.7 2.4.8 3.2.7a2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.6-.3z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
