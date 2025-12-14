'use client';

import { motion } from 'framer-motion';

interface SalesRole {
  category: string;
  roles: string[];
  icon: React.ReactNode;
  gradient: string;
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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-teal-500 to-emerald-500",
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
    gradient: "from-orange-500 to-red-500",
    delay: 0.3
  }
];

export default function SalesRolesSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sales Roles We Hire
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From entry-level SDRs to C-suite revenue leaders, we specialize in hiring sales professionals across all levels
          </motion.p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {salesRolesData.map((roleCategory, index) => (
            <motion.div
              key={roleCategory.category}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6
                     transition-all duration-300 group cursor-pointer
                     relative h-full flex flex-col"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-teal-50/50 opacity-0 rounded-xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                  transition: { 
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    boxShadow: { duration: 0.3 }
                  }
                }}
              >
                <motion.div
                  className="text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {roleCategory.icon}
                </motion.div>
              </motion.div>

              {/* Category Title */}
              <motion.h3 
                className="font-poppins font-semibold text-lg text-gray-900 mb-3 uppercase tracking-wide relative z-10"
                whileHover={{ scale: 1.02, color: "#1e40af" }}
                transition={{ duration: 0.2 }}
              >
                {roleCategory.category}
              </motion.h3>

              {/* Roles List */}
              <ul className="relative space-y-1.5 mb-4 z-10 flex-1">
                {roleCategory.roles.map((role, roleIndex) => (
                  <motion.li 
                    key={roleIndex}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20px" }}
                    transition={{ delay: roleIndex * 0.1 + 0.2, duration: 0.4 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                  >
                    <motion.svg 
                      className="w-4 h-4 text-teal-600 shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span>{role}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
