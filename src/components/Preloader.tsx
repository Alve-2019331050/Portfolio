'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black to-gray-900"
    >
      <motion.div
        initial={{ scale: 0, rotateY: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotateY: [0, 360, 720],
        }}
        transition={{
          duration: 1.5,
          repeat: 1,
          ease: [0.075, 0.82, 0.965, 1],
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <motion.span 
          className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
          animate={{
            textShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{
            duration: 1,
            repeat: 1,
            ease: "easeInOut"
          }}
        >
          A
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
