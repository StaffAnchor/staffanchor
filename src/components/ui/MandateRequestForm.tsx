'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import MultiSelectChips from './MultiSelectChips';
import WeekOffPicker, { emptyWeekOffValue, type WeekOffValue } from './WeekOffPicker';

// Selling style, industries, and languages options are fetched at runtime
// from the shared mandate_option_sets table (via get_mandate_option_sets RPC)
// instead of being hardcoded in this file -- the SAME table also backs the
// CRM's mandate forms, so a value added/removed there shows up here too on
// next page load, with no code change or redeploy needed on either side.
// Other option sets (sub-domains, team size, deal size bands, etc.) remain
// hardcoded here for now, matching the CRM's candidate-options.ts, as part of
// a deliberately scoped first pass.
type MandateOptionSets = {
  selling_style: { value: string; label: string }[];
  industries: { value: string; label: string }[];
  languages: { value: string; label: string }[];
};
const EMPTY_OPTION_SETS: MandateOptionSets = { selling_style: [], industries: [], languages: [] };

// Client-facing hiring-brief intake. Deliberately mirrors the recruiter-side
// mandate taxonomy (same category/sub-domain values, same deal-size bands,
// etc.) so a submission here maps 1:1 onto real mandate fields once a
// recruiter reviews it -- this is the "ideal" path (client fills it in
// directly); a recruiter filling it in after a call remains the fallback,
// unchanged. Submissions always land in employer_inquiries for review, never
// directly as a live mandate -- a recruiter still has to explicitly approve
// and publish it from the CRM.

const CATEGORY_OPTIONS = [
  { value: 'b2b_sales', label: 'B2B Sales' },
  { value: 'b2c_sales', label: 'B2C Sales' },
  { value: 'non_sales', label: 'Other / Non-Sales' },
];

const B2B_SUBDOMAINS = [
  'SaaS Sales', 'Enterprise Sales (Non-SaaS)', 'Government / Institutional Sales',
  'Inside Sales (B2B)', 'Channel / Partner / Distribution Sales', 'Healthcare / Pharma Sales',
];
const B2C_SUBDOMAINS = [
  'Inside Sales (B2C)', 'EdTech', 'BFSI (Fintech / Finance / Loan / Insurance)',
  'Retail Sales', 'Real Estate', 'Other Consumer Sales',
];

function subDomainsFor(category: string): string[] {
  if (category === 'b2b_sales') return B2B_SUBDOMAINS;
  if (category === 'b2c_sales') return B2C_SUBDOMAINS;
  return [];
}

// Mirrors the CRM's candidate-options.ts city list so a client's city picks
// map onto the same known values the recruiter side uses -- "Other" still
// allows a manual entry for anything not on the list.
const CITY_OPTIONS = [
  'Delhi', 'Noida', 'Greater Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad',
  'Mumbai', 'Pune', 'Nagpur', 'Bangalore', 'Hyderabad', 'Chennai', 'Coimbatore',
  'Kolkata', 'Ahmedabad', 'Surat', 'Vadodara', 'Chandigarh', 'Mohali', 'Jaipur',
  'Lucknow', 'Kanpur', 'Indore', 'Bhopal', 'Kochi', 'Thiruvananthapuram',
  'Visakhapatnam', 'Patna', 'Guwahati', 'Bhubaneswar', 'Dehradun',
];

const TEAM_SIZE_OPTIONS = [
  '1-5', '6-10', '11-20', '21-30', '31-40', '41-50',
  '51-75', '76-100', '101-150', '151-200', '201-300',
  '301-400', '401-500', '501-750', '751-1000', '1000+',
];
const WORK_MODE_OPTIONS = ['Onsite', 'Hybrid', 'Remote', 'Open to Any (as per company requirement)'];
const WORKING_DAYS_OPTIONS = ['5 days', '5.5 days', '6 days', 'Rotational'];
const SHIFT_OPTIONS = ['Day shift', 'Night shift (US)', 'UK shift', 'Rotational shift', 'Flexible'];
const SALES_CYCLE_OPTIONS = ['Same day', '<1 week', '1-4 weeks', '1-3 months', '3-6 months', '6-12 months', '12+ months'];
const CURRENCY_OPTIONS = ['INR', 'USD'];
const DEAL_SIZE_BANDS_B2B: Record<string, string[]> = {
  INR: ['<5L', '5L-10L', '10L-15L', '15L-20L', '20L-30L', '30L-50L', '50L-1Cr', '1Cr-5Cr', '5Cr-10Cr', '10Cr-20Cr', '20Cr-40Cr', '40Cr-75Cr', '75Cr+'],
  USD: ['<$10K', '$10K-$25K', '$25K-$50K', '$50K-$100K', '$100K-$250K', '$250K-$500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M+'],
};
const DEAL_SIZE_BANDS_B2C: Record<string, string[]> = {
  INR: ['<10K', '10K-25K', '25K-50K', '50K-1L', '1L-2L', '2L-5L', '5L-10L', '10L-25L', '25L+'],
  USD: ['<$500', '$500-$1K', '$1K-$5K', '$5K-$10K', '$10K-$25K', '$25K-$50K', '$50K+'],
};
function dealSizeBandsFor(category: string, currency: string): string[] {
  if (!currency) return [];
  const bands = category === 'b2c_sales' ? DEAL_SIZE_BANDS_B2C : DEAL_SIZE_BANDS_B2B;
  return bands[currency] ?? [];
}

// B2C: who the end consumer actually is (mirrors CRM's candidate-options.ts).
const B2C_CUSTOMER_TYPES = [
  'Middle Class', 'Upper Middle Class', 'High Net-worth Individuals (HNI)',
  'Parents', 'Students', 'Working Professionals', 'Young Professionals / First Jobbers',
  'Homemakers', 'Senior Citizens', 'Retail Walk-in Visitors', 'Small Business Owners',
  'Urban Consumers', 'Rural / Semi-Urban Consumers',
];

// B2B: the actual decision-maker persona/title this role sells to (mirrors
// CRM's candidate-options.ts).
const CLIENT_PROFILE_OPTIONS = [
  'CEO / Founder', 'CFO', 'COO', 'CHRO / HR Head', 'HR Manager', 'CTO / Tech Head',
  'IT Head', 'Plant Head / Operations Head', 'Procurement Head', 'Marketing Head',
  'Sales Head', 'VP / Director level', 'Business Owner (SMB)',
];

const inputCls =
  'w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 bg-white';
const labelCls = 'block text-[13px] font-medium text-slate-700 mb-1.5';

export default function MandateRequestForm({
  token,
  clientNamePrefill,
  roleTitlePrefill,
}: {
  token: string;
  clientNamePrefill?: string | null;
  roleTitlePrefill?: string | null;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [optionSets, setOptionSets] = useState<MandateOptionSets>(EMPTY_OPTION_SETS);

  useEffect(() => {
    let cancelled = false;
    async function loadOptionSets() {
      const { data } = await supabase.rpc('get_mandate_option_sets');
      if (!cancelled && data) {
        setOptionSets({
          selling_style: data.selling_style ?? [],
          industries: data.industries ?? [],
          languages: data.languages ?? [],
        });
      }
    }
    loadOptionSets();
    return () => {
      cancelled = true;
    };
  }, []);

  const [form, setForm] = useState({
    companyName: clientNamePrefill ?? '',
    fullName: '',
    designation: '',
    workEmail: '',
    mobileNumber: '',
    roleTitle: roleTitlePrefill ?? '',
    category: '',
    subDomains: [] as string[],
    cities: [] as string[],
    cityPick: '',
    cityOther: '',
    budgetMin: '',
    budgetMax: '',
    experienceMin: '',
    experienceMax: '',
    hiringReason: '',
    teamHandling: '',
    teamSizeBand: '',
    workMode: '',
    workingDays: '',
    shiftTiming: '',
    reportingManagerTitle: '',
    companySizeBand: '',
    companyHighlightLinks: '',
    salesCycle: '',
    dealSizeCurrency: '',
    dealSizeBand: '',
    customerProfile: '',
    expectation3Month: '',
    expectation6Month: '',
    expectation1Year: '',
    sellingStyle: '',
    preferredIndustries: [] as string[],
    industriesSoldTo: [] as string[],
    languagesRequired: [] as string[],
    weekOff: emptyWeekOffValue as WeekOffValue,
    b2cCustomerTypes: [] as string[],
    clientProfile: [] as string[],
    message: '',
    // Honeypot -- invisible to real users, left blank. Bots that auto-fill
    // every field on the page tend to fill this too; if it's non-empty we
    // silently pretend to succeed instead of submitting, so scripted spam
    // doesn't need a captcha round trip to be caught.
    website: '',
  });

  const isSalesRole = form.category === 'b2b_sales' || form.category === 'b2c_sales';
  const isB2B = form.category === 'b2b_sales';
  const isB2C = form.category === 'b2c_sales';
  const subDomainOptions = subDomainsFor(form.category);
  const dealSizeOptions = dealSizeBandsFor(form.category, form.dealSizeCurrency);

  function toggleSubDomain(value: string) {
    setForm((f) => ({
      ...f,
      subDomains: f.subDomains.includes(value) ? f.subDomains.filter((s) => s !== value) : [...f.subDomains, value],
    }));
  }

  function addCity(value: string) {
    const v = value.trim();
    if (!v) return;
    setForm((f) => (f.cities.includes(v) ? f : { ...f, cities: [...f.cities, v] }));
  }

  function removeCity(value: string) {
    setForm((f) => ({ ...f, cities: f.cities.filter((c) => c !== value) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.website.trim() !== '') {
      // Honeypot tripped -- almost certainly a bot. Pretend it worked so it
      // doesn't retry with a different payload, but never hit the RPC.
      setSubmitted(true);
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const payload = {
        source: 'client_mandate_request',
        source_token: token,
        company_name: form.companyName,
        full_name: form.fullName,
        designation: form.designation,
        work_email: form.workEmail,
        mobile_number: form.mobileNumber,
        role_title: form.roleTitle,
        category: form.category,
        sub_domains: form.subDomains,
        cities: form.cities,
        budget_min: form.budgetMin,
        budget_max: form.budgetMax,
        experience_min: form.experienceMin,
        experience_max: form.experienceMax,
        hiring_reason: form.hiringReason,
        team_handling: form.teamHandling,
        team_size_band: form.teamHandling === 'team_lead' ? form.teamSizeBand : '',
        work_mode: form.workMode,
        working_days: form.workingDays,
        shift_timing: form.shiftTiming,
        reporting_manager_title: form.reportingManagerTitle,
        company_size_band: form.companySizeBand,
        company_highlight_links: form.companyHighlightLinks
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        sales_cycle: isSalesRole ? form.salesCycle : '',
        deal_size_currency: isSalesRole ? form.dealSizeCurrency : '',
        deal_size_band: isSalesRole ? form.dealSizeBand : '',
        customer_profile: isSalesRole ? form.customerProfile : '',
        expectation_3_month: form.expectation3Month,
        expectation_6_month: form.expectation6Month,
        expectation_1_year: form.expectation1Year,
        selling_style: isSalesRole ? form.sellingStyle : '',
        preferred_industries: form.preferredIndustries,
        industries_sold_to: isSalesRole ? form.industriesSoldTo : [],
        languages_required: form.languagesRequired,
        week_off: form.weekOff.week_off_type === 'fixed' ? form.weekOff.week_off : [],
        week_off_type: form.weekOff.week_off_type,
        rotational_offs_per_week: form.weekOff.week_off_type === 'rotational' ? form.weekOff.rotational_offs_per_week : '',
        mandatory_working_days: form.weekOff.week_off_type === 'rotational' ? form.weekOff.mandatory_working_days : [],
        b2c_customer_types: isB2C ? form.b2cCustomerTypes : [],
        client_profile: isB2B ? form.clientProfile : [],
        message: form.message,
      };
      const { error: rpcError } = await supabase.rpc('submit_employer_inquiry', { payload });
      if (rpcError) throw new Error(rpcError.message);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 px-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Thank you</h1>
        <p className="text-slate-600">
          We&apos;ve received the hiring details. A recruiter from StaffAnchor will review this shortly and reach
          out to confirm before we begin sourcing.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">Tell us about the role</h1>
      <p className="text-slate-500 text-sm mb-8">
        A few details about the hiring need -- the more context you give us, the faster and more precisely we can
        match candidates. Nothing here is published publicly; a recruiter reviews it before anything goes live.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot -- hidden from real users via CSS + off-screen position,
            but present in the DOM/tab order so basic scripted bots that fill
            every input on the page tend to fill it too. Never shown, never
            required, never read except in handleSubmit's spam check above. */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
          <label htmlFor="website">Leave this field blank</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className={labelCls}>Company name</label>
            <input
              required
              value={form.companyName}
              onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Your name</label>
            <input
              required
              value={form.fullName}
              onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Your designation</label>
            <input
              value={form.designation}
              onChange={(e) => setForm((f) => ({ ...f, designation: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Work email</label>
            <input
              required
              type="email"
              value={form.workEmail}
              onChange={(e) => setForm((f) => ({ ...f, workEmail: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Mobile number</label>
            <input
              value={form.mobileNumber}
              onChange={(e) => setForm((f) => ({ ...f, mobileNumber: e.target.value }))}
              className={inputCls}
            />
          </div>
        </div>

        <hr className="border-slate-200" />

        <div>
          <label className={labelCls}>Role title</label>
          <input
            required
            value={form.roleTitle}
            onChange={(e) => setForm((f) => ({ ...f, roleTitle: e.target.value }))}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>What kind of role is this?</label>
          <select
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value, subDomains: [] }))}
            className={inputCls}
          >
            <option value="">Select...</option>
            {CATEGORY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {form.category && subDomainOptions.length > 0 && (
          <div>
            <label className={labelCls}>More specifically, which of these? (select all that would work)</label>
            <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-slate-200 p-3">
              {subDomainOptions.map((o) => (
                <label key={o} className="flex items-center gap-2 text-[13px] text-slate-700">
                  <input type="checkbox" checked={form.subDomains.includes(o)} onChange={() => toggleSubDomain(o)} />
                  {o}
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className={labelCls}>Location(s)</label>
          {form.cities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {form.cities.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 text-[12px] font-medium px-2.5 py-1"
                >
                  {c}
                  <button type="button" onClick={() => removeCity(c)} className="text-slate-400 hover:text-red-600">
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <select
              value={form.cityPick}
              onChange={(e) => setForm((f) => ({ ...f, cityPick: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select city...</option>
              {CITY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                addCity(form.cityPick);
                setForm((f) => ({ ...f, cityPick: '' }));
              }}
              className="shrink-0 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[12px] font-medium px-4"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 mt-1.5">
            <input
              placeholder="Other location (manual entry)"
              value={form.cityOther}
              onChange={(e) => setForm((f) => ({ ...f, cityOther: e.target.value }))}
              className={inputCls}
            />
            <button
              type="button"
              onClick={() => {
                addCity(form.cityOther);
                setForm((f) => ({ ...f, cityOther: '' }));
              }}
              className="shrink-0 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[12px] font-medium px-4"
            >
              Add
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Fixed CTC min (LPA)</label>
            <input
              type="number"
              value={form.budgetMin}
              onChange={(e) => setForm((f) => ({ ...f, budgetMin: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Fixed CTC max (LPA)</label>
            <input
              type="number"
              value={form.budgetMax}
              onChange={(e) => setForm((f) => ({ ...f, budgetMax: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Experience min (years)</label>
            <input
              type="number"
              value={form.experienceMin}
              onChange={(e) => setForm((f) => ({ ...f, experienceMin: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Experience max (years)</label>
            <input
              type="number"
              value={form.experienceMax}
              onChange={(e) => setForm((f) => ({ ...f, experienceMax: e.target.value }))}
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>Preferred candidate industries (background)</label>
          <MultiSelectChips
            options={optionSets.industries}
            selected={form.preferredIndustries}
            onChange={(next) => setForm((f) => ({ ...f, preferredIndustries: next }))}
            placeholder="Search industries..."
          />
        </div>

        <div>
          <label className={labelCls}>Languages required</label>
          <MultiSelectChips
            options={optionSets.languages}
            selected={form.languagesRequired}
            onChange={(next) => setForm((f) => ({ ...f, languagesRequired: next }))}
            placeholder="Search languages..."
          />
        </div>

        <hr className="border-slate-200" />

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Is this a new role or a replacement?</label>
            <select
              value={form.hiringReason}
              onChange={(e) => setForm((f) => ({ ...f, hiringReason: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              <option value="new_role">New role</option>
              <option value="replacement">Replacement</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Will they lead a team or work individually?</label>
            <select
              value={form.teamHandling}
              onChange={(e) => setForm((f) => ({ ...f, teamHandling: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              <option value="individual_contributor">Individual contributor</option>
              <option value="team_lead">Leads a team</option>
            </select>
          </div>
        </div>
        {form.teamHandling === 'team_lead' && (
          <div>
            <label className={labelCls}>Team size</label>
            <select
              value={form.teamSizeBand}
              onChange={(e) => setForm((f) => ({ ...f, teamSizeBand: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              {TEAM_SIZE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        )}

        {isSalesRole && (
          <>
            <div>
              <label className={labelCls}>Selling style -- Hunter, Farmer, or Hybrid?</label>
              <select
                value={form.sellingStyle}
                onChange={(e) => setForm((f) => ({ ...f, sellingStyle: e.target.value }))}
                className={inputCls}
              >
                <option value="">Select...</option>
                {optionSets.selling_style.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Industries sold to / clientele</label>
              <MultiSelectChips
                options={optionSets.industries}
                selected={form.industriesSoldTo}
                onChange={(next) => setForm((f) => ({ ...f, industriesSoldTo: next }))}
                placeholder="Search industries..."
              />
            </div>
            <div>
              <label className={labelCls}>Typical sales cycle for this role</label>
              <select
                value={form.salesCycle}
                onChange={(e) => setForm((f) => ({ ...f, salesCycle: e.target.value }))}
                className={inputCls}
              >
                <option value="">Select...</option>
                {SALES_CYCLE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Currency</label>
                <select
                  value={form.dealSizeCurrency}
                  onChange={(e) => setForm((f) => ({ ...f, dealSizeCurrency: e.target.value, dealSizeBand: '' }))}
                  className={inputCls}
                >
                  <option value="">Select...</option>
                  {CURRENCY_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Typical deal size</label>
                <select
                  value={form.dealSizeBand}
                  onChange={(e) => setForm((f) => ({ ...f, dealSizeBand: e.target.value }))}
                  disabled={!form.dealSizeCurrency}
                  className={inputCls}
                >
                  <option value="">Select...</option>
                  {dealSizeOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Who is the target customer for this role?</label>
              <textarea
                rows={2}
                value={form.customerProfile}
                onChange={(e) => setForm((f) => ({ ...f, customerProfile: e.target.value }))}
                className={inputCls}
              />
            </div>

            {isB2C && (
              <div>
                <label className={labelCls}>Who are the end consumers? (B2C)</label>
                <MultiSelectChips
                  options={B2C_CUSTOMER_TYPES.map((o) => ({ value: o, label: o }))}
                  selected={form.b2cCustomerTypes}
                  onChange={(next) => setForm((f) => ({ ...f, b2cCustomerTypes: next }))}
                  placeholder="Search consumer types..."
                />
              </div>
            )}

            {isB2B && (
              <div>
                <label className={labelCls}>Client profile -- who do they actually sell to? (B2B)</label>
                <MultiSelectChips
                  options={CLIENT_PROFILE_OPTIONS.map((o) => ({ value: o, label: o }))}
                  selected={form.clientProfile}
                  onChange={(next) => setForm((f) => ({ ...f, clientProfile: next }))}
                  placeholder="Search titles..."
                />
              </div>
            )}
          </>
        )}

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className={labelCls}>Work mode</label>
            <select
              value={form.workMode}
              onChange={(e) => setForm((f) => ({ ...f, workMode: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              {WORK_MODE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Working days</label>
            <select
              value={form.workingDays}
              onChange={(e) => setForm((f) => ({ ...f, workingDays: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              {WORKING_DAYS_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Shift</label>
            <select
              value={form.shiftTiming}
              onChange={(e) => setForm((f) => ({ ...f, shiftTiming: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              {SHIFT_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <WeekOffPicker value={form.weekOff} onChange={(next) => setForm((f) => ({ ...f, weekOff: next }))} />

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Reports to (title)</label>
            <input
              value={form.reportingManagerTitle}
              onChange={(e) => setForm((f) => ({ ...f, reportingManagerTitle: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Company size</label>
            <select
              value={form.companySizeBand}
              onChange={(e) => setForm((f) => ({ ...f, companySizeBand: e.target.value }))}
              className={inputCls}
            >
              <option value="">Select...</option>
              {TEAM_SIZE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelCls}>Any links to share (website, funding news, LinkedIn) -- comma-separated</label>
          <input
            value={form.companyHighlightLinks}
            onChange={(e) => setForm((f) => ({ ...f, companyHighlightLinks: e.target.value }))}
            className={inputCls}
          />
        </div>

        <hr className="border-slate-200" />

        <p className="text-[13px] font-medium text-slate-700">What does success look like?</p>
        <div>
          <label className={labelCls}>At 3 months</label>
          <input
            value={form.expectation3Month}
            onChange={(e) => setForm((f) => ({ ...f, expectation3Month: e.target.value }))}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>At 6 months</label>
          <input
            value={form.expectation6Month}
            onChange={(e) => setForm((f) => ({ ...f, expectation6Month: e.target.value }))}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>At 1 year</label>
          <input
            value={form.expectation1Year}
            onChange={(e) => setForm((f) => ({ ...f, expectation1Year: e.target.value }))}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Anything else we should know?</label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className={inputCls}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 disabled:opacity-60"
        >
          {submitting ? 'Submitting...' : 'Submit hiring details'}
        </button>
      </form>
    </div>
  );
}
