import { createClient } from "@supabase/supabase-js";

// Public, anon-key client for staffanchor.com marketing site. Only used to
// call SECURITY DEFINER RPCs (e.g. submit_employer_inquiry) that validate
// and insert on the server side -- this key has no direct table access
// beyond what those RPCs expose, matching the same pattern already used by
// the jobs.staffanchor.com site (quick_apply / submit_candidate RPCs) and
// the CRM's own public-facing routes.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
