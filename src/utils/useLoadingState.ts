'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseLoadingStateOptions {
  minLoadingTime?: number;
  checkImages?: boolean;
  checkFonts?: boolean;
}

export function useLoadingState({
  minLoadingTime = 2000,
  checkImages = true,
  checkFonts = true
}: UseLoadingStateOptions = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const progressRef = useRef(0);
  const startTimeRef = useRef(performance.now());

  const updateProgress = useCallback((newProgress: number) => {
    progressRef.current = Math.min(newProgress, 100);
    setLoadingProgress(progressRef.current);
  }, []);

  const simulateProgress = useCallback(() => {
    return new Promise<void>((resolve) => {
      const startTime = startTimeRef.current;
      const duration = minLoadingTime;
      
      const animate = () => {
        const elapsed = performance.now() - startTime;
        const baseProgress = Math.min((elapsed / duration) * 80, 80); // Base progress up to 80%
        
        updateProgress(baseProgress);
        
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      
      requestAnimationFrame(animate);
    });
  }, [minLoadingTime, updateProgress]);

  const checkPageReady = useCallback(async () => {
    // Start the progress simulation
    const progressPromise = simulateProgress();
    
    const checks: Promise<void>[] = [];
    const resourcesProgress = 80; // Start from 80% when resources start loading

    // Check DOM ready state
    checks.push(
      new Promise<void>((resolve) => {
        if (document.readyState === 'complete') {
          updateProgress(resourcesProgress + 5);
          resolve();
        } else {
          const handler = () => {
            if (document.readyState === 'complete') {
              updateProgress(resourcesProgress + 5);
              resolve();
            }
          };
          document.addEventListener('readystatechange', handler);
        }
      })
    );

    // Check images if enabled
    if (checkImages) {
      checks.push(
        new Promise<void>((resolve) => {
          const images = Array.from(document.images);
          if (images.length === 0) {
            updateProgress(resourcesProgress + 10);
            resolve();
            return;
          }

          let loadedImages = 0;
          const imageLoadHandler = () => {
            loadedImages++;
            const imageProgress = resourcesProgress + 5 + (loadedImages / images.length) * 10;
            updateProgress(imageProgress);
            
            if (loadedImages === images.length) {
              resolve();
            }
          };

          images.forEach((img) => {
            if (img.complete) {
              imageLoadHandler();
            } else {
              img.addEventListener('load', imageLoadHandler);
              img.addEventListener('error', imageLoadHandler);
            }
          });
        })
      );
    }

    // Check fonts if enabled
    if (checkFonts && 'fonts' in document) {
      checks.push(
        document.fonts.ready.then(() => {
          updateProgress(resourcesProgress + 15);
        }).catch(() => {
          updateProgress(resourcesProgress + 15);
        })
      );
    }

    // Wait for both progress simulation and resource loading
    await Promise.all([progressPromise, ...checks]);
    
    // Final progress to 100%
    updateProgress(100);
    
    // Small delay before hiding loading screen
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return true;
  }, [checkImages, checkFonts, simulateProgress, updateProgress]);

  useEffect(() => {
    checkPageReady().then(() => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, [checkPageReady]);

  return {
    isLoading,
    loadingProgress,
    setIsLoading
  };
}