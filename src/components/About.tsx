
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    "Industry-leading expertise with 10+ years of experience",
    "Award-winning team of professionals and innovators",
    "Proven track record with 500+ successful projects",
    "24/7 dedicated support and customer success team"
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[20%] left-[10%] z-[-1] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[15%] right-[15%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-2xl p-6 text-white glass-card"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)" }}
              >
                <div className="text-2xl font-light">15+ Awards</div>
                <div className="text-sm opacity-90">Industry Recognition</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              <span className="text-gray-300">About Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                Innovation Journey
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We are a forward-thinking company dedicated to transforming businesses through 
              innovative technology solutions. Our mission is to empower organizations with 
              cutting-edge tools that drive growth, efficiency, and success.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl glass-card"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)" 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-light text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
