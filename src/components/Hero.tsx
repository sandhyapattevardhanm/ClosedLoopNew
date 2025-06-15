
import React from 'react';
import { ArrowRight, Play, Sparkles, MessageSquare, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-between overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 lg:px-10">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
            filter: "blur(100px)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary Orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
            filter: "blur(80px)"
          }}
          animate={{
            scale: [1, 0.8, 1.1, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium text-blue-400 mb-8"
                style={{
                  background: "rgba(30, 30, 30, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  boxShadow: "0 8px 32px rgba(96, 165, 250, 0.1)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 32px rgba(96, 165, 250, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Empowering AI for Real Work</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Transform Your
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 40px rgba(96, 165, 250, 0.3)"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Digital Future
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed opacity-80"
            >
              Harness the power of AI-driven solutions to elevate your business with unprecedented efficiency and innovation.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold border-0 rounded-xl transition-all duration-300"
                  style={{
                    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(59, 130, 246, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(59, 130, 246, 0.3)";
                  }}
                >
                  Get Started
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group px-8 py-6 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-xl"
                  style={{
                    background: "rgba(30, 30, 30, 0.4)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 max-w-md"
            >
              {[
                { value: "10K+", label: "Happy Clients" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-black text-blue-400 mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Visual Section */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Floating Chat Cards - Devin.ai Style */}
            <div className="relative w-full h-[600px]">
              
              {/* Main Chat Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-20 right-0 w-80 p-6 rounded-2xl"
                style={{
                  background: "rgba(30, 30, 30, 0.7)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(96, 165, 250, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(96, 165, 250, 0.1)"
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotateY: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-semibold">AI Assistant</div>
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  I'll help you optimize your workflow and automate complex tasks with intelligent solutions.
                </div>
              </motion.div>

              {/* Secondary Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-60 left-10 w-72 p-5 rounded-2xl"
                style={{
                  background: "rgba(20, 20, 20, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(147, 51, 234, 0.3)",
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(147, 51, 234, 0.1)"
                }}
                animate={{
                  y: [5, -5, 5],
                  rotateY: [0, -2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-sm">Analytics</div>
                </div>
                <div className="text-gray-400 text-xs">
                  Real-time insights and performance metrics at your fingertips.
                </div>
              </motion.div>

              {/* Floating Orb */}
              <motion.div
                className="absolute top-32 left-20 w-32 h-32 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(96, 165, 250, 0.4), rgba(147, 51, 234, 0.3), rgba(96, 165, 250, 0.4))",
                  filter: "blur(2px)"
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Inner Glowing Core */}
              <motion.div
                className="absolute top-44 left-32 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80"
                style={{
                  boxShadow: "0 0 40px rgba(96, 165, 250, 0.6)"
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div 
          className="w-6 h-10 rounded-full flex justify-center relative overflow-hidden"
          style={{
            border: "2px solid rgba(96, 165, 250, 0.4)",
            background: "rgba(30, 30, 30, 0.3)",
            backdropFilter: "blur(10px)"
          }}
        >
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
