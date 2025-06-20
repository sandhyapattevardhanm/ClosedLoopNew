import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane, Car, Train, Ship, Compass } from 'lucide-react';

interface TravelingCharacterProps {
  isTraveling: boolean;
  currentPage: string;
}

const TravelingCharacter: React.FC<TravelingCharacterProps> = ({ isTraveling, currentPage }) => {
  const [characterState, setCharacterState] = useState<'idle' | 'traveling' | 'arrived'>('idle');
  const [progress, setProgress] = useState(0);
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    if (isTraveling) {
      setCharacterState('traveling');
      setProgress(0);
      setShowEffects(true);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCharacterState('arrived');
            setShowEffects(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setCharacterState('idle');
      setProgress(0);
      setShowEffects(false);
    }
  }, [isTraveling]);

  const getCharacterEmoji = () => {
    switch (currentPage) {
      case 'home': return '🎭';
      case 'about': return '🎪';
      case 'services': return '🎨';
      case 'contact': return '📞';
      case 'ticket': return '🎫';
      default: return '🎵';
    }
  };

  const getTravelMode = () => {
    const modes = ['🚀', '🎈', '🌈', '⭐', '🎪', '🎭', '🎨', '🎬'];
    return modes[Math.floor(progress / 12.5) % modes.length];
  };

  const getBackgroundColor = () => {
    const colors = [
      'from-pink-400 to-purple-400',
      'from-purple-400 to-blue-400',
      'from-blue-400 to-green-400',
      'from-green-400 to-yellow-400',
      'from-yellow-400 to-orange-400',
      'from-orange-400 to-red-400',
      'from-red-400 to-pink-400',
      'from-indigo-400 to-purple-400'
    ];
    return colors[Math.floor(progress / 12.5) % colors.length];
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] pointer-events-none">
      <AnimatePresence>
        {showEffects && (
          <>
            {/* Main character */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: characterState === 'traveling' ? [0, -10, 0] : 0
              }}
              transition={{
                duration: 0.6,
                ease: "backOut",
                y: {
                  duration: 0.8,
                  repeat: characterState === 'traveling' ? Infinity : 0,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="text-4xl filter drop-shadow-lg">
                {characterState === 'traveling' ? getTravelMode() : getCharacterEmoji()}
              </div>
            </motion.div>

            {/* Progress bar */}
            {characterState === 'traveling' && (
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${getBackgroundColor()} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
            )}

            {/* Sparkle trail */}
            {characterState === 'traveling' && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-lg"
                    style={{
                      left: `${Math.random() * 60 - 30}px`,
                      top: `${Math.random() * 60 - 30}px`,
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {['✨', '💫', '⭐', '🌟', '💎', '🎈'][i]}
                  </motion.div>
                ))}
              </>
            )}

            {/* Arrival celebration */}
            {characterState === 'arrived' && (
              <>
                {/* Confetti burst */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-lg"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [1, 1, 0],
                      x: Math.cos((i * Math.PI * 2) / 12) * 80,
                      y: Math.sin((i * Math.PI * 2) / 12) * 80,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: i * 0.05
                    }}
                  >
                    {['🎉', '🎊', '✨', '💫', '⭐', '🌟', '💎', '🎈', '🎪', '🎭', '🎨', '🎬'][i]}
                  </motion.div>
                ))}

                {/* Welcome message */}
                <motion.div
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Welcome to {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}! 🎉
                </motion.div>
              </>
            )}

            {/* Energy waves */}
            <motion.div
              className="absolute inset-0 w-16 h-16 border-2 border-purple-400 rounded-full"
              style={{
                left: '-8px',
                top: '-8px',
              }}
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Rainbow aura */}
            <motion.div
              className="absolute inset-0 w-20 h-20 rounded-full"
              style={{
                left: '-10px',
                top: '-10px',
                background: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080, #ff0000)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full bg-black" style={{ margin: '2px' }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelingCharacter; 