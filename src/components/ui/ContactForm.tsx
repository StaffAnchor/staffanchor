'use client';

import { useState } from 'react';

interface ContactFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: Record<string, string> = {};
    if (!formData.get('name')) newErrors.name = 'Please enter your name.';
    const email = String(formData.get('email') || '');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.get('audience')) newErrors.audience = 'Please select one.';
    if (!formData.get('message')) newErrors.message = 'Please add a short message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setStatus('idle');
    try {
      await onSubmit(formData);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[var(--color-success-soft)] border border-[var(--color-success)]/30 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-2">Message sent</h3>
        <p className="text-[var(--color-muted)]">Thanks for reaching out — we&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 border border-[var(--color-line)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-[var(--color-line)] p-8 space-y-5">
      {status === 'error' && (
        <div className="bg-[var(--color-amber-soft)] border border-[var(--color-amber)]/30 text-[var(--color-amber)] rounded-lg p-4 text-sm">
          Something went wrong sending your message. Please try again, or email us directly.
        </div>
      )}

      <div>
        <label htmlFor="name" className="form-label">Full Name *</label>
        <input id="name" name="name" type="text" className={inputClasses} placeholder="Your full name" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="form-label">Email *</label>
          <input id="email" name="email" type="email" className={inputClasses} placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="audience" className="form-label">I&apos;m reaching out as *</label>
        <select id="audience" name="audience" className={inputClasses} defaultValue="" aria-invalid={!!errors.audience}>
          <option value="" disabled>Select one</option>
          <option value="Employer">An employer</option>
          <option value="Jobseeker">A jobseeker</option>
          <option value="Other">Other</option>
        </select>
        {errors.audience && <p className="text-sm text-red-600 mt-1">{errors.audience}</p>}
      </div>

      <div>
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea id="message" name="message" rows={5} className={inputClasses} placeholder="How can we help?" aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-[var(--color-ink)] hover:bg-[var(--color-accent)] transition-colors duration-200 disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
