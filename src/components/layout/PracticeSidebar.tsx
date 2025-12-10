'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface PracticePage {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface PracticeSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
}

const practicePages: PracticePage[] = [
  {
    id: 'executive-search',
    title: 'Executive Search',
    description: 'CXO & Board-level mandates',
    href: '/executive-search',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 'technology-practice',
    title: 'Technology Practice',
    description: 'Engineering, Cloud, AI & Product',
    href: '/technology-practice',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'consumer-services-practice',
    title: 'Consumer & Services Practice',
    description: 'Operations, Retail & Hospitality',
    href: '/consumer-services-practice',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    description: 'Clean Energy & Mobility',
    href: '/coming-soon',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function PracticeSidebar({ isOpen, onToggle, currentPage }: PracticeSidebarProps) {
  // Dispatch custom event when sidebar state changes
  useEffect(() => {
    const event = new CustomEvent('sidebarToggle', {
      detail: { isOpen }
    });
    window.dispatchEvent(event);
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-64' : 'w-0'} fixed left-0 top-32 bottom-0 transition-all duration-300 ease-in-out overflow-hidden bg-gray-50 border-r border-gray-200 hidden lg:block z-10`}>
        <div className="w-64 p-4 h-full overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mt-12 mb-6">
              <h3 className="font-poppins font-semibold text-lg text-gray-900">Our Core Practices</h3>
            </div>
            <div className="space-y-3">
              {practicePages.map((page) => {
                const isCurrentPage = page.id === currentPage;
                
                if (isCurrentPage) {
                  return (
                    <div key={page.id} className="bg-blue-900 text-white px-4 py-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-white">
                          {page.icon}
                        </div>
                        <div>
                          <div className="font-medium">{page.title}</div>
                          <div className="text-xs text-blue-100">You are here</div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={page.id}
                    href={page.href} 
                    className="block bg-white border border-gray-200 px-4 py-3 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400 group-hover:text-teal-600">
                        {page.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-teal-900">{page.title}</div>
                        <div className="text-xs text-gray-500 group-hover:text-teal-600">{page.description}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Need Help Choosing?</h4>
              <p className="text-sm text-blue-700 mb-3">Our experts can guide you.</p>
              <Link href="/contact" className="text-xs text-blue-600 hover:text-blue-800 underline">
                Get Expert Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Button - Always visible */}
      <div className="hidden lg:block fixed top-24 left-6 z-30 mt-10">
        <button
          onClick={onToggle}
          className="p-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <svg className="w-5 h-5 hover:cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
}