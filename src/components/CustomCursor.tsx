import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      ['BUTTON', 'A', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
      target.closest('button, a, input, textarea, [data-cursor-hover]')
    ) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, [updateMousePosition, handleMouseEnter]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono select-none"
        animate={{
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
          color: isHovering ? '#2874C4' : '#FFFFFF',
          rotate: isHovering ? 15 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      >
        ∞
      </motion.div>
    </>
  );
};

export default CustomCursor;
