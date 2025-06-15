
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Gradient Blob */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 gradient-blob opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary Blob */}
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full floating-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 glass-morphism rounded-full text-sm font-medium text-blue-400 mb-8 glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Transform Your Digital Future</span>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            Transform Your
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-glow"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Digital Future
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Harness the power of AI-driven solutions, secure finance technology, and creative strategy 
            to elevate your business to new heights.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="group btn-glow bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-6 text-lg font-semibold shadow-2xl border-0"
              >
                Get Started
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group glass-morphism hover:glow-blue px-10 py-6 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "10K+", label: "Happy Clients", color: "text-blue-400" },
              { value: "99.9%", label: "Uptime", color: "text-white" },
              { value: "24/7", label: "Support", color: "text-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 card-surface rounded-2xl hover:glow-blue transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <motion.div 
                  className={`text-4xl font-black ${stat.color} mb-2`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Visual Element */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden xl:block"
        animate={{ y: [-20, 20] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <div className="relative w-80 h-80">
          {/* 3D Glass Orb Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-transparent to-blue-400/30 backdrop-blur-sm border border-blue-500/20 glow-blue-intense"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: "conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(30, 30, 30, 0.3), rgba(59, 130, 246, 0.3), rgba(30, 30, 30, 0.3))"
            }}
          />
          
          {/* Inner Glowing Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/60 to-blue-400/60 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
