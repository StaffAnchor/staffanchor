'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const StickyConsultationButton = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();
  
  // Check if we're on the jobseeker page
  const isJobseekerPage = pathname === '/resume-writing';
  
  // Conditional text based on page
  const buttonText =  'Find Jobs';
  const subText =  'Submit profile to get jobs';
  const buttonLink = 'jobseekers';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <>
          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute hover:cursor-pointer -top-2 -right-2 w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-700 transition-colors z-10"
            aria-label="Close consultation button"
          >
            ×
          </button>
          
          {/* Main consultation button */}
          {isJobseekerPage ? (
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="text-left">
                <div className="font-semibold text-sm">{buttonText}</div>
                <div className="text-xs opacity-90">{subText}</div>
              </div>
              
              {/* Arrow */}
              <div className="shrink-0 transform group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ) : (
            <Link
              href={buttonLink}
              className="group relative bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              {/* Text */}
              <div className="text-left">
                <div className="font-semibold text-sm">{buttonText}</div>
                <div className="text-xs opacity-90">{subText}</div>
              </div>
              
              {/* Arrow */}
              <div className="shrink-0 transform group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          )}
          
          {/* Tooltip on hover */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
              {isJobseekerPage ? 'Book your sales career strategy call' : 'Schedule a free consultation with our experts'}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </>
      ) : (
        /* Minimized button */
        <button
          onClick={() => setIsExpanded(true)}
          className="w-12 hover:cursor-pointer h-12 bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          aria-label="Open consultation button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default StickyConsultationButton;