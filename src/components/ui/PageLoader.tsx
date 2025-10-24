'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLoadingState } from '@/utils/useLoadingState';
import LoadingScreen from './LoadingScreen';

interface PageLoaderProps {
  children: React.ReactNode;
  minLoadingTime?: number;
  checkImages?: boolean;
  checkFonts?: boolean;
}

export default function PageLoader({ 
  children, 
  minLoadingTime = 2000,
  checkImages = true,
  checkFonts = true
}: PageLoaderProps) {
  const { isLoading, loadingProgress } = useLoadingState({
    minLoadingTime,
    checkImages,
    checkFonts
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            isVisible={isLoading} 
            progress={loadingProgress}
          />
        )}
      </AnimatePresence>
      
      {/* Content with smooth fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: isLoading ? 0 : 0.2
        }}
        style={{
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        {children}
      </motion.div>
    </>
  );
}