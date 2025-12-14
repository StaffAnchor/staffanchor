'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

interface HeroSectionProps {
  headline: string;
  subtext?: string;
  specialization?: boolean;
  extra?: boolean;
  children?: ReactNode;
  backgroundPattern?: boolean;
  centered?: boolean;
}

const HeroSection = ({ 
  headline, 
  subtext, 
  specialization,
  extra,
  children, 
  backgroundPattern = false,
  centered = false 
}: HeroSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const pathVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0 
    },
    visible: { 
      pathLength: 1, 
      opacity: 1
    }
  };

  return (
    <section ref={ref} className={`relative min-h-screen py-20 lg:py-32 overflow-hidden ${backgroundPattern ? 'bg-linear-to-br from-slate-50 via-blue-50 to-teal-50' : 'bg-white'}`}>
      {/* Subtle Gradient Overlay */}
      {backgroundPattern && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-transparent" />
      )}

      {/* Data Network Texture */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      {/* Geometric Connectivity Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231e40af' stroke-width='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Cline x1='20' y1='20' x2='60' y2='20'/%3E%3Cline x1='40' y1='20' x2='40' y2='40'/%3E%3Cline x1='20' y1='40' x2='40' y2='40'/%3E%3Cline x1='40' y1='40' x2='60' y2='60'/%3E%3Cline x1='20' y1='60' x2='60' y2='60'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      {/* Soft Light Diffusion Spots */}
      {backgroundPattern && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/30 via-blue-50/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-teal-100/25 via-teal-50/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-violet-100/20 via-violet-50/5 to-transparent rounded-full blur-2xl" />
        </>
      )}

      {/* Multi-layered Animated Network Lines */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            {/* Background layer - subtle paths */}
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={controls}
              transition={{ 
                pathLength: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 0.8 }
              }}
              d="M0 80 Q300 120 600 80 T1200 100"
              stroke="url(#bgGradient1)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={controls}
              transition={{ 
                pathLength: { duration: 6, delay: 0.2, ease: "easeInOut" },
                opacity: { duration: 0.8, delay: 0.2 }
              }}
              d="M0 520 Q400 480 800 520 T1200 500"
              stroke="url(#bgGradient2)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />

            {/* Main dynamic paths */}
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={controls}
              transition={{ 
                pathLength: { duration: 4, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
              d="M100 150 Q400 220 800 180 T1100 220"
              stroke="url(#gradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#softGlow)"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={controls}
              transition={{ 
                pathLength: { duration: 4.5, delay: 0.7, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.7 }
              }}
              d="M50 350 Q350 420 750 380 T1050 420"
              stroke="url(#gradient2)"
              strokeWidth="4"
              fill="none"
              filter="url(#softGlow)"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={controls}
              transition={{ 
                pathLength: { duration: 3.5, delay: 1.4, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 1.4 }
              }}
              d="M150 480 Q450 420 850 460 T1150 440"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              filter="url(#subtleGlow)"
            />

            {/* Connection nodes */}
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 0.6 }
              }}
              transition={{ delay: 2, duration: 0.5 }}
              cx="400" cy="200" r="3" fill="url(#nodeGradient)"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 0.6 }
              }}
              transition={{ delay: 2.5, duration: 0.5 }}
              cx="750" cy="380" r="2" fill="url(#nodeGradient)"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 0.6 }
              }}
              transition={{ delay: 3, duration: 0.5 }}
              cx="850" cy="460" r="2.5" fill="url(#nodeGradient)"
            />

            <defs>
              {/* Refined glow filters */}
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Enhanced gradient definitions */}
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#0d9488" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" />
              </linearGradient>

              {/* Background layer gradients */}
              <linearGradient id="bgGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#bfdbfe" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ddd6fe" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="bgGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#cffafe" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.4" />
              </linearGradient>

              {/* Node gradient */}
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${centered ? 'text-center' : 'max-w-4xl'}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight uppercase tracking-wide"
          >
            {headline}
          </motion.h1>
          
          {subtext && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              {subtext}
            </motion.p>
          )}


          {extra && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              We blend market intelligence, technology and human judgment to help companies hire leaders who drive outcomes.
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;