'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type NavSubItem = {
  name: string;
  href: string;
  targetBlank?: boolean;
};

type NavItem = {
  name: string;
  href: string;
  submenu?: NavSubItem[];
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Employers', href: '/employers' },
    { name: 'Jobseekers', href: '/jobseekers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-[var(--color-line)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Staffanchor_Logo.svg"
                alt="StaffAnchor Talent Solutions"
                width={140}
                height={50}
                className="h-14 w-14"
              />
              <span className="font-poppins font-semibold text-lg text-[var(--color-ink)] hidden sm:block">
                StaffAnchor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-ink)] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center rounded-md"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-[var(--color-line)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.targetBlank ? '_blank' : undefined}
                            rel={subItem.targetBlank ? 'noopener noreferrer' : undefined}
                            className="block px-4 py-2 text-sm text-[var(--color-muted)] hover:bg-[var(--color-mist)] hover:text-[var(--color-ink)] transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* CTA Buttons Section */}
          <div className="hidden lg:flex items-center shrink-0">
            <div className="flex items-center space-x-3">
              <Link
                href="/employers"
                className="bg-[var(--color-ink)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-accent)] transition-colors duration-200 whitespace-nowrap"
              >
                Hire Talent
              </Link>
              <Link
                href="/jobseekers"
                className="border border-[var(--color-line)] text-[var(--color-ink)] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[var(--color-ink)] transition-colors duration-200 whitespace-nowrap"
              >
                Find Jobs
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-[var(--color-line)] bg-white"
            >
              <div className="px-4 pt-4 pb-4 space-y-2">
                {/* Mobile Navigation Items */}
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-mist)] rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.targetBlank ? '_blank' : undefined}
                            rel={subItem.targetBlank ? 'noopener noreferrer' : undefined}
                            className="block px-4 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-mist)] rounded-lg transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-6 space-y-3 border-t border-[var(--color-line)] mt-4">
                  <Link
                    href="/employers"
                    className="block w-full bg-[var(--color-ink)] text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-[var(--color-accent)] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Talent
                  </Link>
                  <Link
                    href="/job-seekers"
                    className="block w-full border border-[var(--color-line)] text-[var(--color-ink)] px-6 py-3 rounded-lg text-center font-semibold hover:border-[var(--color-ink)] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Find Jobs
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
