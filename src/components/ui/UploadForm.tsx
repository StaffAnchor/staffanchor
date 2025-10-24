'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface UploadFormProps {
  title: string;
  subtitle?: string;
  acceptedFileTypes?: string;
  onSubmit: (formData: FormData) => Promise<void>;
}

const UploadForm = ({ 
  title, 
  subtitle, 
  acceptedFileTypes = ".pdf,.doc,.docx",
  onSubmit 
}: UploadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      setSelectedFile(null);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
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
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Location Field */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Current Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            required
            placeholder="City, State/Country"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Experience Field */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <select
            name="experience"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select experience level</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-8">5-8 years</option>
            <option value="8-12">8-12 years</option>
            <option value="12+">12+ years</option>
          </select>
        </div>

        {/* Current Company Field */}
        <div>
          <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
            Current Company
          </label>
          <input
            type="text"
            name="currentCompany"
            placeholder="Enter your current company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Current Role Field */}
        <div>
          <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700 mb-2">
            Current Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="currentRole"
            required
            placeholder="Enter your current job title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Industry Field */}
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry <span className="text-red-500">*</span>
          </label>
          <select
            name="industry"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select your industry</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance & Banking</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education & EdTech</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="consulting">Consulting</option>
            <option value="media">Media & Entertainment</option>
            <option value="real-estate">Real Estate</option>
            <option value="hospitality">Hospitality & Tourism</option>
            <option value="automotive">Automotive</option>
            <option value="pharma">Pharmaceuticals</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Current Salary Field */}
        <div>
          <label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700 mb-2">
            Current Annual Salary (LPA)
          </label>
          <select
            name="currentSalary"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select salary range</option>
            <option value="0-3">0-3 LPA</option>
            <option value="3-5">3-5 LPA</option>
            <option value="5-8">5-8 LPA</option>
            <option value="8-12">8-12 LPA</option>
            <option value="12-18">12-18 LPA</option>
            <option value="18-25">18-25 LPA</option>
            <option value="25-40">25-40 LPA</option>
            <option value="40+">40+ LPA</option>
          </select>
        </div>

        {/* Expected Salary Field */}
        <div>
          <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
            Expected Annual Salary (LPA)
          </label>
          <select
            name="expectedSalary"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select expected range</option>
            <option value="0-3">0-3 LPA</option>
            <option value="3-5">3-5 LPA</option>
            <option value="5-8">5-8 LPA</option>
            <option value="8-12">8-12 LPA</option>
            <option value="12-18">12-18 LPA</option>
            <option value="18-25">18-25 LPA</option>
            <option value="25-40">25-40 LPA</option>
            <option value="40+">40+ LPA</option>
          </select>
        </div>

        {/* Notice Period Field */}
        <div>
          <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
            Notice Period <span className="text-red-500">*</span>
          </label>
          <select
            name="noticePeriod"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select notice period</option>
            <option value="immediate">Immediate</option>
            <option value="15-days">15 Days</option>
            <option value="1-month">1 Month</option>
            <option value="2-months">2 Months</option>
            <option value="3-months">3 Months</option>
            <option value="more-than-3">More than 3 Months</option>
          </select>
        </div>

        {/* Key Skills Field */}
        <div>
          <label htmlFor="keySkills" className="block text-sm font-medium text-gray-700 mb-2">
            Key Skills <span className="text-red-500">*</span>
          </label>
          <textarea
            name="keySkills"
            required
            rows={3}
            placeholder="List your key skills (e.g., React, Node.js, Project Management, etc.)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              name="resume"
              id="resume"
              required
              accept={acceptedFileTypes}
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-teal-400 transition-all duration-200"
            >
              <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div className="text-center">
                {selectedFile ? (
                  <div>
                    <p className="text-teal-600 font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 font-medium">Click to upload your resume</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 10MB)</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-full font-medium text-white transition-all duration-200 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Uploading...</span>
            </div>
          ) : (
            'Upload Profile'
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
              Thank you! Your profile has been uploaded successfully. We&apos;ll review it and get back to you with relevant opportunities.
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
              Something went wrong. Please try again or email us your resume directly at info@staffanchor.com.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default UploadForm;