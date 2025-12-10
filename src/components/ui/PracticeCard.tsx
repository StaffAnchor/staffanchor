'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PracticeCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  features?: string[];
}

const PracticeCard = ({ title, description, href, icon, features }: PracticeCardProps) => {
  return (
    <motion.div
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
      {icon && (
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
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        </motion.div>
      )}

      {/* Title */}
      <motion.h3 
        className="font-poppins font-semibold text-lg text-gray-900 mb-3 uppercase tracking-wide relative z-10"
        whileHover={{ scale: 1.02, color: "#1e40af" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10"
        whileHover={{ color: "#374151" }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="space-y-1.5 mb-4 relative z-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-2 text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-20px" }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
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
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-3 relative z-10">
        <Link href={href}>
          <motion.div
            className="inline-flex items-center justify-between w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-md overflow-hidden relative"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              whileHover={{ translateX: "200%" }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.span
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Explore 
            </motion.span>
            
            <motion.svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 4, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PracticeCard;