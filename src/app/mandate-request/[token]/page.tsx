'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import MandateRequestForm from '@/components/ui/MandateRequestForm';

export default function MandateRequestPage() {
  const params = useParams<{ token: string }>();
  const token = params?.token ?? '';
  const [loading, setLoading] = useState(true);
  const [prefill, setPrefill] = useState<{ client_name_prefill: string | null; role_title_prefill: string | null } | null>(
    null
  );

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data } = await supabase.rpc('get_mandate_request_prefill', { p_token: token });
      if (!cancelled) {
        setPrefill(data ?? null);
        setLoading(false);
      }
    }
    if (token) load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (loading) {
    return <div className="max-w-2xl mx-auto py-24 px-6 text-center text-slate-400 text-sm">Loading...</div>;
  }

  return (
    <MandateRequestForm
      token={token}
      clientNamePrefill={prefill?.client_name_prefill ?? null}
      roleTitlePrefill={prefill?.role_title_prefill ?? null}
    />
  );
}
