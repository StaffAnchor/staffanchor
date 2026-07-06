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

// Submits an employer hiring mandate directly to Supabase via the
// public.submit_mandate() RPC (SECURITY DEFINER function, safe for
// anonymous writes — see resume_storage_upload_policy / public_form_submission_functions migrations).
export const submitEmployerForm = async (formData: FormData): Promise<void> => {
  const get = (key: string) => (formData.get(key) as string | null) ?? '';

  const salesCategory = get('salesCategory');
  const budgetRange = get('budgetRange');
  const budget = BUDGET_RANGE_MAP[budgetRange] ?? { min: null, max: null };

  const contactLines = [
    `Contact: ${get('fullName')} (${get('designation')})`,
    `Email: ${get('workEmail')}`,
    `Mobile: ${get('mobileNumber')}`,
    '',
    get('description'),
  ].join('\n');

  const payload = {
    client_name: get('companyName'),
    role_title: get('roleTitle'),
    category: CATEGORY_MAP[salesCategory] ?? null,
    city: get('city'),
    budget_min: budget.min,
    budget_max: budget.max,
    notes: contactLines,
  };

  const { error } = await supabase.rpc('submit_mandate', { payload });
  if (error) {
    throw new Error(error.message || 'Failed to submit mandate');
  }
};
