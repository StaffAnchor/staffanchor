'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wallet } from 'lucide-react';

type NavSubItem = {
  name: string;
  href: string;
  targetBlank?: boolean;
};

type NavItem = {
  name: string;
  href: string;
  submenu?: NavSubItem[];
  targetBlank?: boolean;
  highlight?: boolean;
  // Small pill-within-a-pill marketing badge, e.g. "Up to ₹75K" on the
  // Refer & Earn tab -- distinct from `highlight` (which just makes the tab
  // itself a gradient pill) so a highlighted item can carry an extra bit of
  // eye-catching copy without needing a second visual treatment.
  badge?: string;
  // Which icon renders inside a highlighted pill -- defaults to Sparkles
  // (used by Free Tools) so existing highlighted items don't need updating.
  icon?: 'sparkles' | 'wallet';
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Employers', href: '/employers' },
    { name: 'Jobseekers', href: '/jobseekers' },
    { name: 'Current Jobs', href: 'https://jobs.staffanchor.com/jobs', targetBlank: true },
    { name: 'Refer & Earn', href: '/sales-circle', highlight: true, badge: 'Up to ₹75K', icon: 'wallet' },
    { name: 'Free Tools', href: '/free-tools', highlight: true },
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
                  {item.highlight ? (
                    <Link
                      href={item.href}
                      target={item.targetBlank ? '_blank' : undefined}
                      rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                      className={`group/tool relative mx-1 flex items-center gap-1.5 whitespace-nowrap rounded-full py-1.5 pl-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md ${
                        item.badge ? 'pr-1.5' : 'pr-3.5'
                      } ${
                        item.icon === 'wallet'
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/30'
                          : 'bg-gradient-to-r from-[var(--color-accent)] to-indigo-500 shadow-indigo-500/20 hover:shadow-indigo-500/30'
                      }`}
                    >
                      {item.icon === 'wallet' ? (
                        <Wallet className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <Sparkles className="h-3.5 w-3.5 shrink-0 animate-pulse" />
                      )}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-0.5 whitespace-nowrap rounded-full bg-white/25 px-2 py-1 text-[10.5px] font-bold leading-none tracking-tight">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.targetBlank ? '_blank' : undefined}
                      rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                      className="whitespace-nowrap text-[var(--color-muted)] hover:text-[var(--color-ink)] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center rounded-md"
                    >
                      {item.name}
                      {item.submenu && (
                        <svg className="w-3.5 h-3.5 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  )}

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
                    {item.highlight ? (
                      <Link
                        href={item.href}
                        target={item.targetBlank ? '_blank' : undefined}
                        rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                        className={`flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.01] ${
                          item.icon === 'wallet'
                            ? 'bg-gradient-to-r from-emerald-600 to-emerald-500'
                            : 'bg-gradient-to-r from-[var(--color-accent)] to-indigo-500'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon === 'wallet' ? <Wallet className="h-4 w-4 shrink-0" /> : <Sparkles className="h-4 w-4 shrink-0" />}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="ml-auto shrink-0 whitespace-nowrap rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-bold leading-none tracking-tight">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        target={item.targetBlank ? '_blank' : undefined}
                        rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-3 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-mist)] rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
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

