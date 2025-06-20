import React, { useCallback, useRef } from 'react';
import { ArrowRight, Play, Music, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Enhanced scroll transforms for layered parallax
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);
  const yCards = useTransform(scrollY, [0, 800], [0, 100]);
  
  // Spring physics for smooth motion
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothY3 = useSpring(y3, springConfig);
  const smoothYCards = useSpring(yCards, springConfig);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  // Fixed motion variants with proper TypeScript compatibility
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 lg:px-10">
      {/* Simple Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="public/loops BG blurred.mp4" type="video/mp4" />
      </video> */}

      {/* Enhanced Interactive Particles */}
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
                distance: 150,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: ["#60A5FA", "#3B82F6", "#06B6D4"],
            },
            links: {
              color: "#60A5FA",
              distance: 120,
              enable: true,
              opacity: 0.15,
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
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Enhanced Floating Background Blobs - Updated to Blue/Cyan */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ 
            y: smoothY1,
            left: "-15%",
            top: "-10%",
            background: "radial-gradient(circle, #60A5FA 0%, transparent 80%)"
          }}
          animate={{
            x: [-20, 20, -20],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ 
            y: smoothY2,
            right: "-10%",
            bottom: "-15%",
            background: "radial-gradient(circle, #3B82F6 0%, transparent 80%)"
          }}
          animate={{
            x: [15, -15, 15],
            scale: [1, 0.8, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />

        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl"
          style={{ 
            y: smoothY3,
            left: "30%",
            top: "40%",
            background: "radial-gradient(circle, #06B6D4 0%, transparent 80%)"
          }}
          animate={{
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
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
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium text-[#60A5FA] glass-card cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(96, 165, 250, 0.3)",
                  borderColor: "rgba(96, 165, 250, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  <Music className="w-4 h-4" />
                </motion.div>
                <span>Looping Into the Future</span>
              </motion.div>
            </motion.div>

            {/* Enhanced Animated Gradient Headlines - Devin.ai Style */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-light mb-6 leading-tight tracking-tight"
            >
              <motion.span 
                className="block text-[#9CA3AF] mb-2"
              >
                Welcome to
              </motion.span>
              <motion.span
                className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]"
              >
                ClosedLoop
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Subheading - Devin.ai Style */}
            <motion.p
              variants={itemVariants}
              className="text-[#9CA3AF] max-w-xl mt-4 leading-relaxed text-lg opacity-90"
            >
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. From visionary amateurs to world-class performers.
            </motion.p>
            
            {/* Enhanced CTA Buttons - Devin.ai Style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mt-8 mb-12"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-[#3B82F6] hover:bg-[#2563EB] hover:shadow-[0_0_20px_#60A5FA] text-white px-8 py-6 text-lg font-semibold border-0 rounded-xl transition-all duration-300"
                >
                  Book Tickets
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(255,255,255,0.15)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group px-8 py-6 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-xl glass-card hover:bg-white/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    className="mr-2"
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="h-5 w-5 group-hover:text-[#60A5FA] transition-colors" />
                  </motion.div>
                  Watch Showreel
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 max-w-md"
            >
              {[
                { value: "500+", label: "Artists", delay: 0 },
                { value: "1000+", label: "Events", delay: 0.1 },
                { value: "24/7", label: "Support", delay: 0.2 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center glass-card p-4 rounded-lg"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.2 + stat.delay,
                    duration: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                  }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-[#60A5FA] mb-1"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      color: ["#60A5FA", "#3B82F6", "#60A5FA"]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: index * 0.8,
                      ease: "easeInOut"
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced 3D Card Stack */}
          <motion.div 
            className="relative hidden lg:block"
            style={{ y: smoothYCards }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[600px]" style={{ perspective: "1000px" }}>
              
              {/* Artist Management Card */}
              <motion.div
                initial={{ opacity: 0, z: -100 }}
                animate={{
                  opacity: 1,
                  y: [-8, 8, -8],
                  z: 0
                }}
                className="absolute top-20 right-0 w-80 p-6 rounded-2xl glass-card"
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4)",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-semibold">Artist Management</div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed mb-3">
                  End-to-end career development, strategic planning, and artist representation for global success.
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>

              {/* Event Production Card */}
              <motion.div
                initial={{ opacity: 0, z: -100 }}
                animate={{
                  opacity: 1,
                  y: [6, -6, 6],
                  z: 0
                }}
                className="absolute top-60 left-10 w-72 p-5 rounded-2xl glass-card"
                transition={{
                  opacity: { duration: 0.6, delay: 1.2 },
                  y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center">
                    <Calendar className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-sm">Event Production</div>
                </div>
                <div className="text-gray-400 text-xs mb-3">
                  From concept to curtain call - creating unforgettable immersive experiences.
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Production Quality</span>
                    <span className="text-green-400">Premium</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <motion.div 
                      className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Talent Network Card */}
              <motion.div
                initial={{ opacity: 0, z: -100 }}
                animate={{
                  opacity: 1,
                  y: [-4, 4, -4],
                  z: 0
                }}
                className="absolute bottom-20 right-16 w-64 p-4 rounded-2xl glass-card"
                transition={{
                  opacity: { duration: 0.6, delay: 1.6 },
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(96, 165, 250, 0.4)",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full flex items-center justify-center">
                    <Music className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-xs">Talent Network</div>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  Global roster of exceptional performers
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-[#60A5FA] font-semibold">500+</div>
                    <div className="text-gray-500">Artists</div>
                  </div>
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-[#3B82F6] font-semibold">Global</div>
                    <div className="text-gray-500">Reach</div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating 3D Orb - Updated Colors */}
              <motion.div
                className="absolute top-32 left-20 w-32 h-32 rounded-full cursor-pointer"
                style={{
                  background: "radial-gradient(circle, #60A5FA 0%, transparent 80%)",
                  filter: "blur(2px)",
                  transformStyle: "preserve-3d"
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ 
                  scale: 1.3, 
                  filter: "blur(1px)",
                }}
              />

              {/* Enhanced Glowing Core */}
              <motion.div
                className="absolute top-44 left-32 w-8 h-8 rounded-full bg-gradient-to-r from-[#60A5FA]/90 to-[#3B82F6]/90"
                style={{
                  boxShadow: "0 0 50px rgba(96, 165, 250, 0.8)"
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ 
                  boxShadow: "0 0 80px rgba(96, 165, 250, 1)",
                  scale: 1.6
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ 
          scale: 1.2, 
          y: 0,
          boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)"
        }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 rounded-full flex justify-center relative overflow-hidden glass-card hover:border-[#60A5FA]/50 transition-all duration-300">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-[#60A5FA] to-[#3B82F6] rounded-full mt-2"
            animate={{ 
              y: [0, 20, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
