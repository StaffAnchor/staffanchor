'use client';

import { useEffect, useState } from 'react';

// The "type a message" box. It lives in the StaffAnchor CRM project (one place to improve it for both
// sites) and is shown here in an iframe. The box tells us how tall it is so there is never a scrollbar.
const SRC = process.env.NEXT_PUBLIC_ASSIST_URL ?? 'https://clients.staffanchor.com/embed/assist';

export default function AssistEmbed({ site }: { site: 'main' | 'jobs' }) {
  const [height, setHeight] = useState(380);

  useEffect(() => {
    const origin = new URL(SRC).origin;
    function onMessage(e: MessageEvent) {
      if (e.origin !== origin) return;
      const d = e.data as { type?: string; height?: number } | null;
      if (d?.type === 'sa-assist-height' && typeof d.height === 'number') setHeight(Math.min(Math.max(d.height, 300), 900));
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      src={`${SRC}?site=${site}`}
      title="Message StaffAnchor"
      loading="lazy"
      style={{ width: '100%', height, border: 0, background: 'transparent' }}
    />
  );
}
