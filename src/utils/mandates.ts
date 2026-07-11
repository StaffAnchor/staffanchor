import { supabase } from '@/lib/supabaseClient';

const CATEGORY_MAP: Record<string, string> = {
  'B2B Sales': 'b2b_sales',
  'B2C Sales': 'b2c_sales',
  'Non-Sales / Other': 'non_sales',
};

const BUDGET_RANGE_MAP: Record<string, { min: number | null; max: number | null }> = {
  'Under 10L': { min: 0, max: 10 },
  '10-20L': { min: 10, max: 20 },
  '20-40L': { min: 20, max: 40 },
  '40-75L': { min: 40, max: 75 },
  '75L+': { min: 75, max: null },
};

// Submits an employer hiring mandate to Supabase via the
// public.submit_employer_inquiry() RPC (SECURITY DEFINER, safe for
// anonymous writes). This deliberately lands in the employer_inquiries
// staging table, NOT directly in public.mandates -- a mandate that goes
// straight live would appear as a public, unreviewed job listing on
// jobs.staffanchor.com. A recruiter now reviews each submission in the
// CRM and explicitly promotes it into a real mandate ("Create Mandate"),
// which is what actually publishes it.
export const submitEmployerForm = async (formData: FormData): Promise<void> => {
  const get = (key: string) => (formData.get(key) as string | null) ?? '';

  const salesCategory = get('salesCategory');
  const budgetRange = get('budgetRange');
  const budget = BUDGET_RANGE_MAP[budgetRange] ?? { min: null, max: null };

  const payload = {
    company_name: get('companyName'),
    role_title: get('roleTitle'),
    category: CATEGORY_MAP[salesCategory] ?? '',
    city: get('city'),
    budget_min: budget.min !== null ? String(budget.min) : '',
    budget_max: budget.max !== null ? String(budget.max) : '',
    full_name: get('fullName'),
    designation: get('designation'),
    work_email: get('workEmail'),
    mobile_number: get('mobileNumber'),
    message: get('description'),
    source: 'employers_page',
  };

  const { error } = await supabase.rpc('submit_employer_inquiry', { payload });
  if (error) {
    throw new Error(error.message || 'Failed to submit mandate');
  }
};
