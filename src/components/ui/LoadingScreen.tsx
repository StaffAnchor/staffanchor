'use client';

import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LoadingScreenProps {
  isVisible: boolean;
  progress?: number;
}

export default function LoadingScreen({ isVisible, progress = 0 }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 loading-screen flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-teal-50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Brand area with enhanced animation */}
        <motion.div
          className="mb-12 text-center"
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.1, 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-poppins font-bold bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            StaffAnchor
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg font-inter font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Talent Solutions
          </motion.p>
        </motion.div>

        {/* Loading spinner with pulse effect */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Pulsing background circle */}
          <motion.div
            className="absolute inset-0 bg-blue-100 rounded-full -m-6"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <LoadingSpinner size="lg" color="primary" />
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.p className="text-gray-600 font-inter text-base">
            Building teams that build the future
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ...
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 256 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-blue-500 to-teal-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Progress percentage */}
        <motion.p
          className="mt-2 text-sm text-gray-500 font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.p>

        {/* Enhanced animated dots */}
        <motion.div
          className="flex space-x-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-linear-to-r from-blue-500 to-teal-500 rounded-full"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}