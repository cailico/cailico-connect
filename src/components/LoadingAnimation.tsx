import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center gradient-hero"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-0">
            {/* Letter c */}
            <motion.span
              className="text-6xl md:text-8xl font-bold text-navy"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              c
            </motion.span>

            {/* Letters AI */}
            <motion.span
              className="text-6xl md:text-8xl font-bold text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A
            </motion.span>

            {/* Letter I with leaf */}
            <div className="relative">
              <motion.span
                className="text-6xl md:text-8xl font-bold text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I
              </motion.span>
              {/* Animated Leaf */}
              <motion.svg
                className="absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-8 md:w-10 md:h-12"
                viewBox="0 0 40 50"
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <path
                  d="M20 0 C35 10, 40 25, 35 40 C30 45, 25 48, 20 50 C15 48, 10 45, 5 40 C0 25, 5 10, 20 0 Z"
                  fill="hsl(136 46% 33%)"
                />
                <path
                  d="M20 8 C20 8, 20 42, 20 42"
                  stroke="hsl(136 46% 45%)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>

            {/* Letters Lico */}
            <motion.span
              className="text-6xl md:text-8xl font-bold text-navy"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Lico
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-1/3 text-primary-foreground/70 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Agencia de Inteligencia Artificial
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
