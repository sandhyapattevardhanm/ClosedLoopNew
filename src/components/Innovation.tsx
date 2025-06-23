
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Innovation = () => {

  return (
    <section id="about" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[10%] left-[15%] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[10%] right-[20%] animate-pulse" style={{ animationDelay: '1.5s' }} />
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
                <div className="text-xl font-light">Every Story</div>
                <div className="text-xl opacity-90">Deserves a Perfect Stage</div>
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
              <span className="text-gray-300">Who</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                We Are
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Closed Loop is a premium artist and event management company built on the idea that every story deserves a perfect stage. We specialise in crafting immersive experiences by connecting extraordinary talent with memorable moments, whether through live performances, curated events, or brand-driven activations.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Since our inception, we’ve worked behind the scenes and under the spotlight to deliver excellence across corporate gatherings, private functions, weddings, concerts, product launches, and influencer events. Our name, Closed Loop, symbolises the full-circle service we provide from ideation and planning to execution and post-event success.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
