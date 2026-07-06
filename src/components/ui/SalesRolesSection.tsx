'use client';

import { motion } from 'framer-motion';

interface SalesRole {
  category: string;
  roles: string[];
  icon: React.ReactNode;
  delay: number;
}

const salesRolesData: SalesRole[] = [
  {
    category: "Early Sales Roles",
    roles: ["SDR / BDR", "Inbound & Outbound Sales", "Inside Sales Executives"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    delay: 0
  },
  {
    category: "Mid–Senior Roles",
    roles: ["Account Executives", "Field Sales / Channel Sales", "Customer Acquisition Specialists", "Key Account Managers"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    delay: 0.1
  },
  {
    category: "Leadership Roles",
    roles: ["Sales Managers", "Zonal / Regional / City Heads", "Country Head", "Head of Sales", "VP Sales / CRO", "Business Head (P&L)"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    delay: 0.3
  }
];

export default function SalesRolesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-3 block">Coverage</span>
          <h2 className="heading-lg mb-4">Sales roles we hire</h2>
          <p className="text-lg text-[var(--color-muted)]">
            From entry-level SDRs to C-suite revenue leaders, we specialize in hiring sales professionals across all levels.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salesRolesData.map((roleCategory, index) => (
            <motion.div
              key={roleCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-[var(--color-line)] hover:border-[var(--color-ink)] transition-colors duration-300 p-7 relative h-full flex flex-col group"
            >
              <span className="text-xs font-mono text-[var(--color-muted)] mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="w-11 h-11 bg-[var(--color-ink)] group-hover:bg-[var(--color-accent)] rounded-xl flex items-center justify-center mb-5 text-white transition-colors duration-300">
                {roleCategory.icon}
              </div>

              <h3 className="font-poppins font-semibold text-lg text-[var(--color-ink)] mb-3 tracking-tight">
                {roleCategory.category}
              </h3>

              <ul className="space-y-1.5 flex-1">
                {roleCategory.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="flex items-center space-x-2 text-sm text-[var(--color-muted)]">
                    <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
