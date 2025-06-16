
import React, { useCallback } from 'react';
import { ArrowRight, Play, MessageSquare, Code, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

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
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 lg:px-10">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-[-1]"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#60A5FA",
            },
            links: {
              color: "#60A5FA",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Floating Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[-5%] left-[-10%]"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-3xl bottom-[-10%] right-[-5%]"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2
          }}
        />

        <motion.div
          className="absolute w-[250px] h-[250px] bg-[#06B6D4]/10 rounded-full blur-2xl top-1/2 left-1/3"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium text-blue-400 backdrop-blur-md bg-white/5 border border-white/10"
                style={{
                  boxShadow: "0 0 30px #60A5FA30"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px #60A5FA50"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-4 h-4" />
                <span>AI-Powered Innovation</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text mb-6 leading-tight tracking-tight"
            >
              Transform Your
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              >
                Digital Future
              </motion.span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-xl mt-4 leading-relaxed text-xl opacity-90"
            >
              Harness the power of AI-driven solutions to elevate your business with unprecedented efficiency and innovation.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mt-8 mb-12"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold border-0 rounded-xl transition-all duration-300 shadow-[0_0_30px_#60A5FA30] hover:shadow-[0_0_40px_#60A5FA50]"
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
                whileHover={{ 
                  scale: 1.02,
                  rotate: -1
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group px-8 py-6 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
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
                  className="text-center backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-blue-400 mb-1"
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

          {/* Right - 3D Glassmorphic Card Stack */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full h-[600px]">
              
              {/* Main AI Chat Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                className="absolute top-20 right-0 w-80 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
                style={{
                  boxShadow: "0 0 30px #60A5FA30"
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotateY: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 0 40px #60A5FA50",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-semibold">AI Assistant</div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed mb-3">
                  I'll help you optimize your workflow and automate complex tasks with intelligent solutions.
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>

              {/* Code Analysis Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
                className="absolute top-60 left-10 w-72 p-5 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
                style={{
                  boxShadow: "0 0 25px #8B5CF630"
                }}
                animate={{
                  y: [5, -5, 5],
                  rotateY: [0, -2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: -5,
                  boxShadow: "0 0 35px #8B5CF650",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Code className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-sm">Code Analysis</div>
                </div>
                <div className="text-gray-400 text-xs mb-3">
                  Real-time code optimization and performance insights.
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Performance</span>
                    <span className="text-green-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Analytics Dashboard Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.1 }}
                className="absolute bottom-20 right-16 w-64 p-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
                style={{
                  boxShadow: "0 0 20px #06B6D430"
                }}
                animate={{
                  y: [-3, 3, -3],
                  rotateY: [0, 1, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: 2
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 3,
                  boxShadow: "0 0 30px #06B6D450",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-xs">Live Analytics</div>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  Performance metrics and insights
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-cyan-400 font-semibold">1.2M</div>
                    <div className="text-gray-500">Requests</div>
                  </div>
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-green-400 font-semibold">99.9%</div>
                    <div className="text-gray-500">Uptime</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating 3D Orb */}
              <motion.div
                className="absolute top-32 left-20 w-32 h-32 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(96, 165, 250, 0.4), rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.4), rgba(96, 165, 250, 0.4))",
                  filter: "blur(2px)"
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity },
                  scale: { duration: 4, repeat: Infinity }
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
                  repeat: Infinity
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
          className="w-6 h-10 rounded-full flex justify-center relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/20"
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
