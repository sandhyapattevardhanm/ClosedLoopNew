import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

// Entertainment industry quotes and highlights
const entertainmentQuotes = [
  {
    quote: "Music is the universal language of mankind.",
    author: "Henry Wadsworth Longfellow",
    category: "Music"
  },
  {
    quote: "Art enables us to find ourselves and lose ourselves at the same time.",
    author: "Thomas Merton",
    category: "Art"
  },
  {
    quote: "The stage is not merely the meeting place of all the arts, but is also the return of art to life.",
    author: "Oscar Wilde",
    category: "Theater"
  },
  {
    quote: "Dance is the hidden language of the soul.",
    author: "Martha Graham",
    category: "Dance"
  },
  {
    quote: "Cinema is the most beautiful fraud in the world.",
    author: "Jean-Luc Godard",
    category: "Film"
  },
  {
    quote: "Creativity takes courage.",
    author: "Henri Matisse",
    category: "Art"
  },
  {
    quote: "The artist is nothing without the gift, but the gift is nothing without work.",
    author: "Émile Zola",
    category: "Art"
  },
  {
    quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
    author: "Plato",
    category: "Music"
  }
];

const industryHighlights = [
  "Global Music Industry Revenue: $26.2B in 2023",
  "Digital Streaming Dominates 84% of Music Consumption",
  "Live Events Industry Expected to Reach $31.5B by 2028",
  "NFT Art Market Surges with $2.8B in Sales",
  "Virtual Reality Concerts Revolutionize Live Performance",
  "AI-Generated Music Creates New Creative Frontiers",
  "Sustainability Becomes Key Focus in Event Production",
  "Metaverse Concerts Attract Millions of Virtual Attendees"
];

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    // Only trigger transition if path actually changed
    if (location.pathname !== previousPath && previousPath !== '') {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Much faster!
      
      return () => clearTimeout(timer);
    }
    
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            {/* Stunning gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
            
            {/* Animated wave effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </motion.div>

            {/* Central explosion effect */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0.8, 1.2, 0],
                  rotate: [0, 180, 360, 540, 720]
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1]
                }}
              >
                {/* Main circle */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 0.4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      x: Math.cos((i * Math.PI * 2) / 8) * 60,
                      y: Math.sin((i * Math.PI * 2) / 8) * 60,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Particle burst effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0, 
                    opacity: 0 
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 20) * 200,
                    y: Math.sin((i * Math.PI * 2) / 20) * 200,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: i * 0.02,
                  }}
                />
              ))}
            </div>

            {/* Energy rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 border border-blue-400/30 rounded-full"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 2],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              />
            ))}

            {/* Edge glow effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-400/20" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-cyan-400/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ 
            opacity: 0,
            scale: 0.95,
            y: 10
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            y: -10
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: isLoading ? 0.8 : 0
          }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition; 