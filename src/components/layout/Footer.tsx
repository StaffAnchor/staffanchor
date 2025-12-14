'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const Footer = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Pages that have sidebar
  const sidebarPages = ['/sales-hiring', '/leadership-hiring', '/volume-hiring', '/sales-talent-intelligence', '/interim'];
  const hasSidebar = sidebarPages.includes(pathname);

  // Listen for sidebar state changes via custom events
  useEffect(() => {
    const handleSidebarToggle = (event: CustomEvent) => {
      setSidebarOpen(event.detail.isOpen);
    };

    window.addEventListener('sidebarToggle', handleSidebarToggle as EventListener);
    
    return () => {
      window.removeEventListener('sidebarToggle', handleSidebarToggle as EventListener);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Executive Search', href: '/executive-search' },
      { name: 'Functional Hiring', href: '/functional-hiring' },
      { name: 'Industry Expertise', href: '/industry-expertise' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      
    ],
    resources: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Career Resources', href: '/job-seekers#resources' },
      { name: 'Industry Reports', href: '/blog#reports' },
    ],
    connect: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/staffanchor', external: true },
      { name: 'Get Hired', href: '/job-seekers' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${hasSidebar && sidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/Staffanchor_Logo.svg" 
                alt="StaffAnchor Talent Solutions" 
                width={120}
                height={40}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-3 max-w-md text-sm leading-relaxed">
              Modern-age, AI-enabled recruitment consultancy blending human insight with data-driven intelligence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@staffanchor.com" className="hover:text-teal-400 transition-colors">
                  info@staffanchor.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917273000088" className="hover:text-teal-400 transition-colors">
                  +91 7273000088
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-2 uppercase tracking-wider text-sm">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-2 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-2 uppercase tracking-wider text-sm">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} StaffAnchor Talent Solutions. All rights reserved.
          </p>
          
          {/* Key Metrics */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="text-teal-400 font-semibold">500+</span>
              <span>Placements</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-teal-400 font-semibold">95%</span>
              <span>Repeat Clients</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-teal-400 font-semibold">72hr</span>
              <span>Shortlisting</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;