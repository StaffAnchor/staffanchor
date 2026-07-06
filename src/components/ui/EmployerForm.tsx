'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'url';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface EmployerFormProps {
  title: string;
  subtitle?: string;
  submitText?: string;
  onSubmit: (formData: FormData) => Promise<void>;
}

const employerFormFields: FormField[] = [
  { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Enter your company name" },
  { name: "roleTitle", label: "Role Title", type: "text", required: true, placeholder: "e.g. Enterprise Account Executive" },
  {
    name: "salesCategory",
    label: "Sales Category",
    type: "select",
    required: true,
    placeholder: "Select category",
    options: ["B2B Sales", "B2C Sales", "Non-Sales / Other"]
  },
  { name: "city", label: "City", type: "text", required: true, placeholder: "e.g. Bengaluru, Mumbai, Delhi NCR" },
  {
    name: "budgetRange",
    label: "Budget Range (Fixed CTC, ₹ LPA)",
    type: "select",
    required: true,
    placeholder: "Select budget range",
    options: ["Under 10L", "10-20L", "20-40L", "40-75L", "75L+"]
  },
  { name: "description", label: "Brief Description", type: "textarea", required: true, placeholder: "What does this role need to get done? Motion, team, mandate context." },
  { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "Enter your full name" },
  { name: "designation", label: "Designation", type: "text", required: true, placeholder: "HR Manager, CEO, Founder, etc." },
  { name: "workEmail", label: "Work Email", type: "email", required: true, placeholder: "Enter your work email" },
  { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true, placeholder: "Enter your mobile number" }
];

const EmployerForm = ({ 
  title, 
  subtitle, 
  submitText = "Submit",
  onSubmit
}: EmployerFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<{[key: string]: string}>({});
  const [showCustomIndustry, setShowCustomIndustry] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formDataToSubmit = new FormData();
    
    // Add all form field values
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.set(key, value);
    });
    
    try {
      await onSubmit(formDataToSubmit);
      setSubmitStatus('success');
      setFormData({});
      setShowCustomIndustry(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const renderField = (field: FormField) => {
    const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200";
    
    // Special handling for industry field to allow custom input
    if (field.name === 'industry') {
      return (
        <div className="space-y-4">
          <select
            name={field.name}
            value={showCustomIndustry ? 'Other' : (formData[field.name] || '')}
            onChange={(e) => {
              if (e.target.value === 'Other') {
                setShowCustomIndustry(true);
                handleInputChange(field.name, '');
              } else {
                setShowCustomIndustry(false);
                handleInputChange(field.name, e.target.value);
              }
            }}
            required={field.required && !showCustomIndustry}
            className={baseClasses}
          >
            <option value="">{field.placeholder || `Select ${field.label}`}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          {showCustomIndustry && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                name="customIndustry"
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder="Please specify your industry"
                required={field.required}
                className={baseClasses}
              />
            </motion.div>
          )}
        </div>
      );
    }
    
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            rows={4}
            className={`${baseClasses} resize-none`}
          />
        );
      
      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            className={baseClasses}
          >
            <option value="">{field.placeholder || `Select ${field.label}`}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            className={baseClasses}
          />
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-8"
    >
      <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      
      {subtitle && (
        <p className="text-gray-600 mb-6">{subtitle}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {employerFormFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 cursor-pointer px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[var(--color-ink)] hover:bg-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            submitText
          )}
        </motion.button>        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-700 text-sm font-medium">
              Thank you! Your submission has been received. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-700 text-sm font-medium">
              Something went wrong. Please try again or contact us directly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default EmployerForm;