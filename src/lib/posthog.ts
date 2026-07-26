import posthog from "posthog-js";

// Same env-var-with-fallback convention already used for the Supabase client
// in this codebase (see lib/supabaseClient.ts on the jobs site) -- the
// fallback is PostHog's client-side project key, which is designed to be
// public-safe (it can only write events, not read data), so shipping it as
// a literal default is fine even before NEXT_PUBLIC_POSTHOG_KEY is set in
// Vercel's project settings.
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_oD3iuApjwWCvMQDrBp9Vf3in7HwvZFM2ZTgWvkB5j7bq";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

// Guarded, idempotent init -- safe to call from multiple client components
// (e.g. once from the root provider, and PostHog's own capture calls
// elsewhere) without double-initializing the SDK.
export function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false, // we capture pageviews manually on route change (App Router doesn't fire a full reload)
    capture_pageleave: true,
  });
  initialized = true;
}

export { posthog };
