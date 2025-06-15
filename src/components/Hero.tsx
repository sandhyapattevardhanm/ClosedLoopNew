
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

  const floatingVariants = {
    animate: {
      y: [-20, 20]
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-slate-600/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-slate-600/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-slate-500/30 rounded-full blur-lg"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Glassmorphism Background */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants} 
              className="mb-6"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-6 border border-blue-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Transform Your Digital Future</span>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-6 leading-tight"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Transform Your
              <motion.span
                className="block bg-gradient-to-r from-blue-500 via-slate-700 to-blue-600 bg-clip-text text-transparent"
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
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Harness the power of AI-driven solutions, secure finance technology, and creative strategy 
              to elevate your business to new heights.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-slate-700 to-blue-600 hover:from-slate-800 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
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
                  className="group border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-4 text-lg backdrop-blur-sm bg-white/80 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                { value: "10K+", label: "Happy Clients", color: "text-blue-600" },
                { value: "99.9%", label: "Uptime", color: "text-slate-700" },
                { value: "24/7", label: "Support", color: "text-blue-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            className="flex-1 hidden lg:flex items-center justify-center relative"
            variants={floatingVariants}
            animate="animate"
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-96 h-96">
              {/* 3D Glass Sphere Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-slate-600/20 to-blue-400/30 backdrop-blur-sm border border-white/30"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  background: "conic-gradient(from 0deg, rgba(59, 130, 246, 0.3), rgba(71, 85, 105, 0.3), rgba(59, 130, 246, 0.3), rgba(71, 85, 105, 0.3))"
                }}
              />
              
              {/* Inner Glowing Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/50 to-slate-600/50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
