import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, PartyPopper, Music, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "🎉 You're in the loop!",
        description: "Get ready for some amazing entertainment updates and exclusive behind-the-scenes content!",
      });
    }, 1000);
  };

  const emojis = ['🎭', '🎪', '🎨', '🎬', '🎤', '🎧', '🎹', '🎸', '🥁', '🎪'];
  const [currentEmoji, setCurrentEmoji] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % emojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 text-4xl opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎭
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-20 text-3xl opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🎪
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-2xl opacity-20"
        animate={{ 
          x: [0, 10, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ⭐
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="text-6xl mr-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {emojis[currentEmoji]}
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Join the 
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Fun Zone!
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know about our latest shows, exclusive events, and behind-the-scenes magic! 
              <br />
              <span className="text-pink-300 font-semibold">No spam, just pure entertainment! 🎉</span>
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email for magic updates ✨"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-full focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  required
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <PartyPopper className="w-5 h-5" />
                      Join the Party!
                    </div>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-gray-400 text-sm"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-pink-400" />
                <span>Early access</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Special offers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
