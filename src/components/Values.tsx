
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
    <section id="values" className="py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl top-10 left-1/4 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-600/15 via-pink-500/10 to-blue-500/15 rounded-full blur-3xl bottom-10 right-1/4 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text">
              Our Core Values
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
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
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 25px 60px rgba(96, 165, 250, 0.25)"
              }}
              className="group relative p-8 rounded-2xl backdrop-blur-md bg-white/8 border border-white/15 hover:border-blue-400/40 transition-all duration-400"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Value Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Value Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {value.title}
              </h3>

              {/* Value Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {value.description}
              </p>

              {/* Hover Overlay with Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              
              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/20 transition-all duration-400 pointer-events-none" />
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
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Experience Our Values in Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
