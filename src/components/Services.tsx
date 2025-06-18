
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Calendar, Megaphone, Camera, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      description: "End-to-end artist management services tailored to each individual's unique vision, goals, and artistic identity.",
      features: [
        "Strategic career planning & long-term development",
        "Booking & contract negotiations",
        "Tour management & logistics",
        "Personal branding & image consulting",
        "Rights management & financial advisory",
        "Mental wellness and career sustainability support"
      ]
    },
    {
      icon: Music,
      title: "Talent Booking",
      description: "Connecting event organisers, brands, and venues with a diverse roster of high-calibre performers and influencers.",
      features: [
        "Customised artist curation for events",
        "Domestic and international talent sourcing",
        "Corporate, festival, nightlife bookings",
        "Technical and hospitality rider coordination",
        "Real-time artist availability management"
      ]
    },
    {
      icon: Calendar,
      title: "Event Production",
      description: "Full-service event production with precision, flair, and creative direction that leaves a lasting impression.",
      features: [
        "Full-service event conceptualisation",
        "Stage and lighting design, AV coordination",
        "Artist and guest logistics",
        "Creative direction and programming",
        "Staffing, vendor management, execution",
        "Post-event analytics and impact reporting"
      ]
    },
    {
      icon: Megaphone,
      title: "Brand Partnerships",
      description: "Pairing artists with bold, forward-thinking brands to create campaigns and experiences that resonate deeply.",
      features: [
        "Brand-artist matchmaking",
        "Endorsements and experiential marketing",
        "Social media and digital activations",
        "Collaborative content production",
        "Long-term brand ambassadorship",
        "Negotiations and brand protection"
      ]
    },
    {
      icon: Camera,
      title: "Media & PR",
      description: "Strategic publicity and media presence that amplifies your voice through targeted campaigns and reputation management.",
      features: [
        "Media relations and press outreach",
        "Social media strategy and growth",
        "Content creation and storytelling",
        "Influencer collaborations",
        "Crisis communication management",
        "Interview coaching and media training"
      ]
    },
    {
      icon: Settings,
      title: "Production Setup",
      description: "Behind-the-scenes services ensuring your event is executed flawlessly with professional equipment and crew.",
      features: [
        "Stage design and fabrication",
        "Professional sound and lighting systems",
        "LED screens and visual backdrops",
        "Crew and technical staff coordination",
        "Rehearsal and event-day stage management"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[20%] left-[10%] z-[-1] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[15%] right-[15%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
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
            <span className="text-gray-300">Our</span>
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafted with Creativity. Delivered with Precision. End-to-end services that bridge the gap between talent, audience, and brands.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.015,
                boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" 
              }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 glass-card"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#60A5FA]/25 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Service Title */}
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#60A5FA] transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-start gap-3 text-sm text-gray-500"
                  >
                    <div className="w-1 h-1 bg-[#60A5FA] rounded-full mt-2 flex-shrink-0" />
                    <span className="group-hover:text-gray-400 transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
