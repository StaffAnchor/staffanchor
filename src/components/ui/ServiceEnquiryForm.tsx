'use client';

import { useState } from 'react';
import { posthog } from '@/lib/posthog';
import { submitContactForm } from '@/utils/googleSheets';

// A short contact request for the services that start with a conversation
// rather than a full hiring mandate (leadership search, RPO, managed teams,
// sales enablement, hiring advisory). Goes through the same pipeline as the
// Contact page, so it lands in the same inbox and CRM list.
export default function ServiceEnquiryForm({
  service,
  title,
  subtitle,
  submitText,
  messageLabel = 'What would you like to discuss? (optional)',
}: {
  service: string;
  title: string;
  subtitle?: string;
  submitText: string;
  messageLabel?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: invisible to people, filled by scripts. Pretend success.
    if (String(fd.get('website') || '').trim() !== '') {
      setStatus('success');
      form.reset();
      return;
    }

    const next: Record<string, string> = {};
    if (!String(fd.get('name') || '').trim()) next.name = 'Please enter your name.';
    const email = String(fd.get('email') || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid work email.';
    if (!String(fd.get('company') || '').trim()) next.company = 'Please enter your company.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    const out = new FormData();
    out.set('name', String(fd.get('name')).trim());
    out.set('email', email);
    out.set('phone', String(fd.get('phone') || '').trim());
    out.set('audience', 'Employer');
    out.set(
      'message',
      `[${service} enquiry] Company: ${String(fd.get('company')).trim()}. ${String(fd.get('message') || '').trim()}`.trim()
    );
    try {
      await submitContactForm(out);
      setStatus('success');
      posthog.capture('service_enquiry_submitted', { service });
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[var(--color-success-soft)] border border-[var(--color-success)]/30 rounded-2xl p-8 text-center">
        <h3 className="font-poppins font-semibold text-xl text-[var(--color-ink)] mb-2">Thank you, we have your request.</h3>
        <p className="text-[var(--color-muted)]">A StaffAnchor team member will reach out within one business day.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-2 uppercase tracking-wide">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
          <label htmlFor="enquiry-website">Leave this field blank</label>
          <input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enquiry-name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input id="enquiry-name" name="name" type="text" className={inputClasses} placeholder="Your full name" aria-invalid={!!errors.name} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="enquiry-company" className="block text-sm font-medium text-gray-700 mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input id="enquiry-company" name="company" type="text" className={inputClasses} placeholder="Your company" aria-invalid={!!errors.company} />
            {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="enquiry-email" className="block text-sm font-medium text-gray-700 mb-2">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input id="enquiry-email" name="email" type="email" className={inputClasses} placeholder="you@company.com" aria-invalid={!!errors.email} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="enquiry-phone" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <input id="enquiry-phone" name="phone" type="tel" className={inputClasses} placeholder="Optional" />
          </div>
        </div>
        <div>
          <label htmlFor="enquiry-message" className="block text-sm font-medium text-gray-700 mb-2">{messageLabel}</label>
          <textarea id="enquiry-message" name="message" rows={4} className={`${inputClasses} resize-none`} placeholder="A line or two is plenty." />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-4 cursor-pointer px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--color-ink)] hover:bg-[var(--color-accent)]'
          }`}
        >
          {status === 'sending' ? 'Sending…' : submitText}
        </button>
        {status === 'error' && (
          <p className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
            Something went wrong. Please try again or email info@staffanchor.com.
          </p>
        )}
      </form>
    </div>
  );
}
