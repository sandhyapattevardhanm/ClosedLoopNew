
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Globe, Star } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We prioritise transparency, trust, and professionalism in every relationship—with our artists, our clients, and our audiences. Allowing and helping artists to obtain the freedom to express themselves authentically."
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Innovation drives everything we do. We embrace bold ideas and push the boundaries of what's possible in entertainment. We aspire to be today's \"out of the box idea\" and tomorrow's \"core memory unlocked on a night I'll never forget.\""
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We know and believe success is never a solo act. We believe in meaningful partnerships that empower talent and foster collective growth. We dream of making the world a smaller place through global collaborations."
    },
    {
      icon: Globe,
      title: "Diversity & Inclusion",
      description: "We represent talent from all walks of life and champion stories that reflect the richness of global culture. We seek out voices that are often unheard and celebrate stories that challenge norms and spark dialogue."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Excellence is not an act, but a mindset we carry into every detail. We hold ourselves to the highest standards, delivering results that not only meet expectations but exceed them, leaving a lasting legacy."
    }
  ];

  return (
    <section id="values" className="relative py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-[#60A5FA]/20 rounded-full blur-3xl top-10 left-1/4 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-10 right-1/4 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            <span className="text-gray-300">Our Core</span>
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do, from artist relationships to audience experiences.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.015,
                boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)"
              }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 glass-card"
            >
              {/* Value Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-[#60A5FA]/30 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Value Title */}
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#60A5FA] transition-colors">
                {value.title}
              </h3>

              {/* Value Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            These values aren't just words on a page—they're the foundation of every partnership, every performance, and every moment we create.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3B82F6] hover:bg-[#2563EB] hover:shadow-[0_0_20px_#60A5FA] text-white font-light px-8 py-4 rounded-xl transition-all duration-300"
          >
            Experience Our Values in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
