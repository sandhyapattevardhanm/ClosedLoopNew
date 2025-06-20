import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const EntertainmentQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(entertainmentQuotes[0]);
  const [currentHighlight, setCurrentHighlight] = useState(industryHighlights[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Change quote every 8 seconds
    const quoteTimer = setInterval(() => {
      setCurrentQuote(entertainmentQuotes[Math.floor(Math.random() * entertainmentQuotes.length)]);
      setCurrentHighlight(industryHighlights[Math.floor(Math.random() * industryHighlights.length)]);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 max-w-sm bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl z-40"
        >
          {/* Quote */}
          <motion.div
            key={currentQuote.quote}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <blockquote className="text-white text-sm font-light italic leading-relaxed">
              "{currentQuote.quote}"
            </blockquote>
            <div className="text-blue-300 text-xs mt-2">
              — {currentQuote.author}
              <span className="ml-2 px-2 py-1 bg-blue-600/20 rounded-full text-xs">
                {currentQuote.category}
              </span>
            </div>
          </motion.div>

          {/* Industry highlight */}
          <motion.div
            key={currentHighlight}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-3 border-t border-white/10"
          >
            <div className="text-cyan-300 text-xs font-medium mb-1">
              Industry Insight
            </div>
            <div className="text-white text-xs">
              {currentHighlight}
            </div>
          </motion.div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white/60 hover:text-white text-lg"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntertainmentQuotes; 