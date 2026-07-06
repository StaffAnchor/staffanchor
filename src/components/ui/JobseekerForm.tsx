'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'file' | 'url' | 'number' | 'multiselect';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface JobseekerFormProps {
  title: string;
  subtitle?: string;
  acceptedFileTypes?: string;
  onSubmit: (formData: FormData) => Promise<void>;
}

const candidateFormSections = [
  {
    section: "Personal Information",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" as const, required: true, placeholder: "Enter your full name" },
      { name: "email", label: "Email ID", type: "email" as const, required: true, placeholder: "Enter your email address" },
      { name: "mobile", label: "Mobile Number", type: "tel" as const, required: true, placeholder: "Enter your mobile number" },
      { 
        name: "currentCity", 
        label: "Current City / Location", 
        type: "select" as const, 
        required: false, 
        placeholder: "Select your current city",
        options: [
          "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", 
          "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
          "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", 
          "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", 
          "Varanasi", "Srinagar", "Dhanbad", "Jodhpur", "Amritsar", "Raipur", "Allahabad", 
          "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Madurai", "Gurgaon", "Navi Mumbai", 
          "Aurangabad", "Solapur", "Ranchi", "Jalandhar", "Tiruchirappalli", "Chandigarh", "Other"
        ]
      },
      { 
        name: "preferredJobLocations", 
        label: "Preferred Job Location(s)", 
        type: "multiselect" as const, 
        required: true, 
        placeholder: "Select preferred job locations",
        options: [
          "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", 
          "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
          "Remote", "Anywhere in India", "International", "Other"
        ]
      },
      { name: "linkedinProfile", label: "LinkedIn Profile", type: "url" as const, required: false, placeholder: "https://linkedin.com/in/yourprofile" },
      { 
        name: "employmentStatus", 
        label: "Current Employment Status", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select employment status",
        options: ["Employed", "Serving Notice", "Unemployed", "Freelancer"]
      }
    ]
  },
  {
    section: "Professional Summary",
    fields: [
      { name: "currentCompany", label: "Current Company", type: "text" as const, required: false, placeholder: "Enter your current company name" },
      { name: "currentDesignation", label: "Current Designation", type: "text" as const, required: true, placeholder: "Enter your current job title" },
      { 
        name: "totalExperience", 
        label: "Total Experience (Years)", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select total experience",
        options: ["0–2", "2–4", "4–8", "8–12", "12–18", "18+"]
      },
      { 
        name: "functionalExpertise", 
        label: "Functional Expertise", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select functional area",
        options: [
          "Sales & Business Development", "Marketing & Growth", "Operations & Supply Chain", 
          "Technology & Engineering", "Finance & Accounting", "Human Resources", 
          "Product Management", "Strategy & Consulting", "Legal & Compliance", 
          "Customer Success", "Data Science & Analytics", "Design & Creative", "Other"
        ]
      },
      { 
        name: "industriesWorked", 
        label: "Industries Worked in", 
        type: "multiselect" as const, 
        required: true, 
        placeholder: "Select industries you've worked in",
        options: [
          "Technology", "Healthcare", "Finance & Banking", "E-commerce & Retail", "Manufacturing", 
          "Education & EdTech", "Real Estate", "Hospitality", "Consulting", "Media & Entertainment", 
          "Automotive", "Pharmaceuticals", "Energy & Utilities", "Government", "Non-Profit", "Other"
        ]
      },
      { name: "resume", label: "Resume Upload", type: "file" as const, required: true, placeholder: "Upload your resume (PDF, DOC, DOCX)" },
      { name: "professionalSummary", label: "Professional Summary", type: "textarea" as const, required: false, placeholder: "Brief summary of your professional background (max 300 characters)" }
    ]
  },
  {
    section: "Education & Certifications",
    fields: [
      { 
        name: "highestQualification", 
        label: "Highest Qualification", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select highest qualification",
        options: ["Graduate", "Post-Graduate", "MBA", "BTech", "Diploma", "PhD", "Other"]
      },
      { name: "specialization", label: "Specialization", type: "text" as const, required: false, placeholder: "Enter your specialization/major" },
      { name: "certifications", label: "Certifications", type: "text" as const, required: false, placeholder: "List your relevant certifications" }
    ]
  },
  {
    section: "Career Preferences",
    fields: [
      { 
        name: "preferredFunctionalArea", 
        label: "Preferred Functional Area", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select preferred functional area",
        options: [
          "Sales & Business Development", "Marketing & Growth", "Operations & Supply Chain", 
          "Technology & Engineering", "Finance & Accounting", "Human Resources", 
          "Product Management", "Strategy & Consulting", "Legal & Compliance", 
          "Customer Success", "Data Science & Analytics", "Design & Creative", "Other"
        ]
      },
      { name: "targetRoles", label: "Target Roles", type: "text" as const, required: false, placeholder: "Specify target job titles or roles" },
      { 
        name: "preferredIndustries", 
        label: "Preferred Industries", 
        type: "multiselect" as const, 
        required: false, 
        placeholder: "Select preferred industries",
        options: [
          "Technology", "Healthcare", "Finance & Banking", "E-commerce & Retail", "Manufacturing", 
          "Education & EdTech", "Real Estate", "Hospitality", "Consulting", "Media & Entertainment", 
          "Automotive", "Pharmaceuticals", "Energy & Utilities", "Government", "Non-Profit", "Other"
        ]
      },
      { name: "currentCTC", label: "Current CTC (₹ LPA)", type: "number" as const, required: true, placeholder: "Enter current annual salary in lakhs" },
      { name: "expectedCTC", label: "Expected CTC (₹ LPA)", type: "number" as const, required: true, placeholder: "Enter expected annual salary in lakhs" },
      { 
        name: "noticePeriod", 
        label: "Notice Period", 
        type: "select" as const, 
        required: true, 
        placeholder: "Select notice period",
        options: ["Immediate", "15 days", "30 days", "60 days", "90 days"]
      }
    ]
  }
];

const JobseekerForm = ({ 
  title, 
  subtitle, 
  acceptedFileTypes = ".pdf,.doc,.docx",
  onSubmit 
}: JobseekerFormProps) => {
  const [openSection, setOpenSection] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string[]}>({});
  const [openMultiselects, setOpenMultiselects] = useState<{[key: string]: boolean}>({});
  const [fileError, setFileError] = useState<string>('');
  const [formData, setFormData] = useState<{[key: string]: string | number}>({});
  const multiselectRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  // Close multiselect when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(openMultiselects).forEach(fieldName => {
        if (openMultiselects[fieldName] && multiselectRefs.current[fieldName]) {
          if (!multiselectRefs.current[fieldName]?.contains(event.target as Node)) {
            setOpenMultiselects(prev => ({ ...prev, [fieldName]: false }));
          }
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMultiselects]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Check for file size errors before submission
    if (fileError) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formDataToSubmit = new FormData();
    
    // Add all form field values
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.set(key, value.toString());
    });
    
    // Add multiselect values to form data
    Object.entries(selectedOptions).forEach(([fieldName, values]) => {
      formDataToSubmit.set(fieldName, values.join(', '));
    });

    // Add file if selected
    if (selectedFile) {
      formDataToSubmit.set('resume', selectedFile);
    }

    try {
      await onSubmit(formDataToSubmit);
      setSubmitStatus('success');
      // Reset all form data
      setFormData({});
      setSelectedFile(null);
      setSelectedOptions({});
      setFileError('');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (fieldName: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // Check if a section has any filled fields
  const isSectionFilled = (section: typeof candidateFormSections[0]) => {
    return section.fields.some(field => {
      if (field.type === 'multiselect') {
        return selectedOptions[field.name]?.length > 0;
      } else if (field.type === 'file') {
        return selectedFile !== null;
      } else {
        return formData[field.name] && formData[field.name] !== '';
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`File size must be less than 2MB. Current file is ${(file.size / (1024 * 1024)).toFixed(2)}MB.`);
        setSelectedFile(null);
        // Clear the input
        e.target.value = '';
      } else {
        setFileError('');
        setSelectedFile(file);
      }
    } else {
      setFileError('');
      setSelectedFile(null);
    }
  };

  const handleMultiSelectChange = (fieldName: string, value: string) => {
    setSelectedOptions(prev => {
      const current = prev[fieldName] || [];
      const updated = current.includes(value) 
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [fieldName]: updated };
    });
  };

  const renderField = (field: FormField) => {
    const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200";
    
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            rows={3}
            maxLength={300}
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
            {field.options?.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <div 
            ref={(el) => { multiselectRefs.current[field.name] = el; }}
            className="space-y-2"
          >
            {/* Dropdown Toggle Button */}
            <button
              type="button"
              onClick={() => setOpenMultiselects(prev => ({ ...prev, [field.name]: !prev[field.name] }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-gray-400 focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-200"
            >
              <span className="text-gray-700">
                {selectedOptions[field.name]?.length > 0 
                  ? `${selectedOptions[field.name].length} selected`
                  : field.placeholder || `Select ${field.label}`
                }
              </span>
              <motion.svg
                animate={{ rotate: openMultiselects[field.name] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Dropdown Content */}
            <AnimatePresence>
              {openMultiselects[field.name] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2 bg-gray-50"
                >
                  {field.options?.map((option: string) => (
                    <label key={option} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedOptions[field.name]?.includes(option) || false}
                        onChange={() => handleMultiSelectChange(field.name, option)}
                        className="w-4 h-4 text-[var(--color-accent)] focus:ring-[var(--color-accent)] border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Selected Items Display */}
            {selectedOptions[field.name]?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedOptions[field.name].map((selected: string) => (
                  <span key={selected} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    {selected}
                    <button
                      type="button"
                      onClick={() => handleMultiSelectChange(field.name, selected)}
                      className="hover:bg-teal-200 rounded-full w-4 h-4 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      
      case 'file':
        return (
          <div className="relative">
            <input
              type="file"
              name={field.name}
              required={field.required}
              accept={acceptedFileTypes}
              onChange={handleFileChange}
              className="hidden"
              id={field.name}
            />
            <label
              htmlFor={field.name}
              className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-[var(--color-accent)] transition-all duration-200"
            >
              <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div className="text-center">
                {selectedFile ? (
                  <div>
                    <p className="text-[var(--color-accent)] font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 font-medium">{field.placeholder}</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 2MB)</p>
                  </div>
                )}
              </div>
            </label>
            {fileError && (
              <div className="mt-2 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {fileError}
              </div>
            )}
            {selectedFile && !fileError && (
              <div className="mt-2 text-sm text-green-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                File selected: {selectedFile.name}
              </div>
            )}
          </div>
        );
      
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, field.type === 'number' ? parseFloat(e.target.value) || '' : e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            step={field.type === 'number' ? '0.1' : undefined}
            min={field.type === 'number' ? '0' : undefined}
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
        {candidateFormSections.map((section, sectionIndex) => (
          <div key={section.section} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Section Header */}
            <button
              type="button"
              onClick={() => setOpenSection(openSection === sectionIndex ? -1 : sectionIndex)}
              className="w-full px-6 py-4 hover:cursor-pointer bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <span className="font-poppins font-semibold text-lg text-gray-900 uppercase tracking-wide">
                  Section {sectionIndex + 1}: {section.section}
                </span>
                {isSectionFilled(section) && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    In Progress
                  </span>
                )}
              </div>
              <motion.svg
                animate={{ rotate: openSection === sectionIndex ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Section Content */}
            <AnimatePresence>
              {openSection === sectionIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-white space-y-4"
                >
                  {section.fields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
              : 'bg-[var(--color-accent)] hover:bg-teal-700 focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7938l3-2.647z" />
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit Registration'
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-700 text-sm font-medium">
              Thank you! Your registration has been submitted successfully. We&apos;ll review your profile and get back to you with relevant opportunities.
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
              Something went wrong. Please try again or email us your details directly at info@staffanchor.com.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default JobseekerForm;