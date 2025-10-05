import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const GoBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true);
    
    const startPosition = window.pageYOffset;
    const duration = 800; // Fast scroll - 800ms
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Remove blur when done
        document.body.style.filter = 'blur(0px)';
        setTimeout(() => {
          document.body.style.filter = '';
          document.body.style.transition = '';
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
          setIsScrolling(false);
        }, 200);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          disabled={isScrolling}
        >
          <motion.div
            animate={isScrolling ? { y: [-2, -6, -2] } : { y: 0 }}
            transition={{ duration: 0.6, repeat: isScrolling ? Infinity : 0 }}
          >
            <FaArrowUp />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoBackTop;