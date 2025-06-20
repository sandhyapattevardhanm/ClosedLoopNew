import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle floating dots */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-600/10 rounded-full"
        style={{ top: '15%', left: '8%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-3 h-3 bg-blue-700/15 rounded-full"
        style={{ top: '65%', right: '12%' }}
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute w-1.5 h-1.5 bg-blue-800/20 rounded-full"
        style={{ top: '35%', left: '85%' }}
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      <motion.div
        className="absolute w-2.5 h-2.5 bg-blue-600/12 rounded-full"
        style={{ top: '80%', left: '25%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, 25, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle geometric shapes */}
      <motion.div
        className="absolute w-2 h-2 bg-blue-700/20 rotate-45"
        style={{ top: '25%', right: '25%' }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [45, 225, 45],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute w-3 h-3 bg-blue-800/15 rotate-45"
        style={{ top: '75%', left: '70%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          rotate: [45, -135, 45],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Subtle lines */}
      <motion.div
        className="absolute w-8 h-0.5 bg-blue-600/10"
        style={{ top: '20%', left: '60%' }}
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute w-6 h-0.5 bg-blue-700/12"
        style={{ top: '90%', right: '40%' }}
        animate={{
          y: [0, 8, 0],
          x: [0, -3, 0],
          opacity: [0.12, 0.3, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default FloatingElements; 