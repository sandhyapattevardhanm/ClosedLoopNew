
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

  // Enhanced motion variants with proper ease format
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
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 lg:px-10">
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
              value: ["#60A5FA", "#8B5CF6", "#06B6D4"],
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

      {/* Enhanced Floating Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-500/30 via-pink-400/20 to-blue-500/25 rounded-full blur-3xl"
          style={{ 
            y: smoothY1,
            left: "-15%",
            top: "-10%"
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
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-600/25 via-cyan-500/15 to-purple-500/20 rounded-full blur-3xl"
          style={{ 
            y: smoothY2,
            right: "-10%",
            bottom: "-15%"
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
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/20 via-purple-400/25 to-pink-600/15 rounded-full blur-2xl"
          style={{ 
            y: smoothY3,
            left: "30%",
            top: "40%"
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 10
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
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium text-purple-400 backdrop-blur-md bg-white/5 border border-white/10 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px #A855F750",
                  borderColor: "rgba(168, 85, 247, 0.4)",
                  rotateZ: 1
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

            {/* Enhanced Animated Gradient Headlines */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-bold mb-6 leading-tight tracking-tight"
            >
              <motion.span 
                className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 bg-clip-text animate-shimmer bg-[length:400%_100%]"
              >
                Welcome to
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer bg-[length:400%_100%]"
              >
                ClosedLoop
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-xl mt-4 leading-relaxed text-xl opacity-90"
            >
              We're an entertainment powerhouse and artist management agency dedicated to elevating tomorrow's stars. From visionary amateurs to world-class performers.
            </motion.p>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mt-8 mb-12"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: -2,
                  rotateZ: 1
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold border-0 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_#A855F760]"
                >
                  Discover Talent
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotateX: -2,
                  rotateY: 2,
                  rotateZ: -1,
                  boxShadow: "0 0 25px rgba(255,255,255,0.15)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group px-8 py-6 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    className="mr-2"
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
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
                  className="text-center backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.2 + stat.delay,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    rotateZ: 2
                  }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-purple-400 mb-1"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      color: ["#A855F7", "#EC4899", "#A855F7"]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: index * 0.8 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Card Stack */}
          <motion.div 
            className="relative hidden lg:block"
            style={{ y: smoothYCards }}
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[600px]" style={{ perspective: "1000px" }}>
              
              {/* Artist Management Card */}
              <motion.div
                initial={{ opacity: 0, z: -100 }}
                animate={{
                  opacity: 1,
                  y: [-8, 8, -8],
                  rotateX: [0, 2, 0],
                  z: 0
                }}
                className="absolute top-20 right-0 w-80 p-6 rounded-2xl backdrop-blur-md bg-white/8 border border-white/15"
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  rotateZ: 2,
                  boxShadow: "0 20px 60px #A855F740",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white font-semibold">Artist Management</div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed mb-3">
                  End-to-end career development, strategic planning, and artist representation for global success.
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>

              {/* Event Production Card */}
              <motion.div
                initial={{ opacity: 0, z: -100 }}
                animate={{
                  opacity: 1,
                  y: [6, -6, 6],
                  rotateX: [0, -2, 0],
                  z: 0
                }}
                className="absolute top-60 left-10 w-72 p-5 rounded-2xl backdrop-blur-md bg-white/8 border border-white/15"
                transition={{
                  opacity: { duration: 0.6, delay: 1.2 },
                  y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  rotateZ: -2,
                  boxShadow: "0 20px 60px #EC489940",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
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
                      className="bg-gradient-to-r from-pink-400 to-blue-400 h-1 rounded-full"
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
                  rotateX: [0, 1, 0],
                  z: 0
                }}
                className="absolute bottom-20 right-16 w-64 p-4 rounded-2xl backdrop-blur-md bg-white/8 border border-white/15"
                transition={{
                  opacity: { duration: 0.6, delay: 1.6 },
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: -3,
                  rotateZ: 1,
                  boxShadow: "0 20px 60px #3B82F640",
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Music className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-white font-medium text-xs">Talent Network</div>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  Global roster of exceptional performers
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-blue-400 font-semibold">500+</div>
                    <div className="text-gray-500">Artists</div>
                  </div>
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="text-purple-400 font-semibold">Global</div>
                    <div className="text-gray-500">Reach</div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating 3D Orb */}
              <motion.div
                className="absolute top-32 left-20 w-32 h-32 rounded-full cursor-pointer"
                style={{
                  background: "conic-gradient(from 0deg, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.4), rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5))",
                  filter: "blur(2px)",
                  transformStyle: "preserve-3d"
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  rotateX: [0, 10, 0],
                  rotateY: [0, 15, 0]
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.3, 
                  filter: "blur(1px)",
                  rotateZ: 10
                }}
              />

              {/* Enhanced Glowing Core */}
              <motion.div
                className="absolute top-44 left-32 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/90 to-pink-500/90"
                style={{
                  boxShadow: "0 0 50px rgba(168, 85, 247, 0.8)"
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 1, 0.8],
                  rotateZ: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                whileHover={{ 
                  boxShadow: "0 0 80px rgba(168, 85, 247, 1)",
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
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
        }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 rounded-full flex justify-center relative overflow-hidden backdrop-blur-md bg-white/8 border border-white/25 hover:border-purple-400/50 transition-all duration-300">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
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
