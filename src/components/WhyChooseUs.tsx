
import React from 'react';
import { Clock, Headphones, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Lightning Fast Service",
      description: "Get results in record time with our streamlined processes and efficient workflows."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated support team is always available to help you succeed."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Decades of combined experience delivering exceptional results for clients."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with you as partners to achieve your business objectives."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[350px] h-[350px] bg-[#3B82F6]/15 rounded-full blur-3xl top-[30%] right-[20%] z-[-1] animate-pulse" />
        <div className="absolute w-[250px] h-[250px] bg-[#60A5FA]/20 rounded-full blur-3xl bottom-[20%] left-[25%] z-[-1] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            <span className="text-gray-300">Why Choose</span>
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              ClosedLoop?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our unique combination of expertise, 
            technology, and customer-centric approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.015, 
                  boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" 
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
