import React from 'react';
import { Users, CalendarCheck2, LayoutGrid, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "A Curated Network of Top-Tier Talent",
      description:
        "We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs. Our artist roster, thoughtfully curated to ensure quality, originality, and professionalism for every occasion, speaks for itself. Whether it’s a corporate launch, a wedding celebration, or a brand campaign, we have the perfect performer for every stage and the perfect stage for every performer.",
    },
    {
      icon: CalendarCheck2,
      title: "Hands-On Experience Across Diverse Event Types",
      description:
        "Our team brings years of real-world experience in organising and managing a wide spectrum of events. From intimate gatherings and private parties to large-scale corporate events and public concerts, we understand the nuances that make each event unique. We plan every detail with precision—timelines, vendor coordination, venue setup, and talent management—ensuring flawless execution from start to finish.",
    },
    {
      icon: LayoutGrid,
      title: "One-Stop Destination for Artist, Event & Production Needs",
      description:
        "Closed Loop offers a complete ecosystem for entertainment and event services under one roof. You don’t need to juggle multiple vendors. We handle everything from artist sourcing and event concept planning to production logistics like stage, sound, lighting, and branding. This integrated approach ensures smooth communication, faster turnaround, and a unified creative vision for your event.",
    },
    {
      icon: Sparkles,
      title: "A Passionate Team That Brings Your Vision to Life",
      description:
        "We’re not just planners, we're creators. Our team is made up of passionate individuals who thrive on creativity, collaboration, and delivering extraordinary experiences. We take time to understand your vision, personalise every element, and go the extra mile to exceed expectations. At Closed Loop, your goals become our mission.",
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[350px] h-[350px] bg-[#3B82F6]/15 rounded-full blur-3xl top-[30%] right-[20%] z-[-1] animate-pulse" />
        <div
          className="absolute w-[250px] h-[250px] bg-[#60A5FA]/20 rounded-full blur-3xl bottom-[20%] left-[25%] z-[-1] animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Closed Loop?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional value through our unique combination of expertise,
            creativity, and a deep understanding of the entertainment landscape.
          </p>
        </motion.div>

        {/* List items vertically */}
        <div className="space-y-8">
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
                  boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)",
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="h-8 w-12 text-white" />
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
