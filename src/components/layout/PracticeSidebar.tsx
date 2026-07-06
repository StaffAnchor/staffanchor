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
    id: 'sales-hiring',
    title: 'Sales Hiring',
    description: 'Mid–Senior Sales Roles',
    href: '/sales-hiring',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'leadership-hiring',
    title: 'Leadership Hiring',
    description: 'Revenue Leadership Roles',
    href: '/leadership-hiring',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 'volume-hiring',
    title: 'Volume Hiring',
    description: 'Scale-Up & Expansion',
    href: '/volume-hiring',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 'sales-talent-intelligence',
    title: 'Sales Talent Intelligence',
    description: 'Market Insights & Strategy',
    href: '/sales-talent-intelligence',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'interim',
    title: 'Interim & Contract Hiring',
    description: 'Time-Sensitive Roles',
    href: '/interim',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    <div key={page.id} className="bg-[var(--color-ink)] text-white px-4 py-3 rounded-lg">
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
                    className="block bg-white border border-gray-200 px-4 py-3 rounded-lg hover:border-teal-300 hover:bg-[var(--color-accent-soft)] transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-gray-400 group-hover:text-[var(--color-accent)]">
                        {page.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-teal-900">{page.title}</div>
                        <div className="text-xs text-gray-500 group-hover:text-[var(--color-accent)]">{page.description}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-3 bg-[var(--color-accent-soft)] rounded-lg">
              <h4 className="font-medium text-[var(--color-ink)] mb-2">Need Help Choosing?</h4>
              <p className="text-sm text-[var(--color-muted)] mb-3">Our experts can guide you.</p>
              <Link href="/contact" className="text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] underline">
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
          className="p-3 bg-[var(--color-ink)] text-white rounded-lg shadow-lg hover:bg-[var(--color-accent)] transition-colors"
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