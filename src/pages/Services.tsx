import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Calendar, Megaphone, Camera, Settings, Star, Check, ArrowRight, Play, Phone, Mail, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const convertToRupees = (usd: number) => {
    return Math.round(usd * 83);
  };

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const services = [
    {
      icon: Users,
      title: "Artist Management",
      description: "We represent top-tier performers including singers, DJs, emcees, dancers, and influencers. Our team handles contracts, promotions, and scheduling with precision and care.",
      desc: "You focus on the stage—we’ll manage the rest.",
    },
    {
      icon: Music,
      title: "Event Management",
      description: "We bring your event vision to life—corporate, public, or themed. From planning to execution, we handle logistics, vendors, and budgeting.",
      desc: "Your story, perfectly staged.",
    },
    {
      icon: Calendar,
      title: "Brand Collaborations & Promotions",
      description: "We connect brands with artists to create powerful campaigns. Think influencer partnerships, product launches, and immersive experiences.",

      desc: "Engage your audience with authenticity.",
    },
    {
      icon: Megaphone,
      title: "Production Setup",
      description: "Behind every great event is flawless production. We manage stage design, lighting, visuals, and crew coordination.",
      desc: "Leave the tech to us—focus on the impact.",
    },


  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Artist Manager",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Event Director",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <FloatingElements />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[20%] left-[10%] z-[-1] animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[15%] right-[15%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="text-gray-300">Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              <strong><em>Crafted with Creativity. Delivered with Precision.</em></strong></p>
            <p className="text-l text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              At <strong>Closed Loop</strong>, we offer end-to-end services that bridge the gap between <strong>talent</strong>, <strong>audience</strong>, and <strong>brands</strong>. Whether you're planning an intimate evening or a high-profile corporate affair, our team is equipped to turn ideas into experiences.</p>

          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)"
                  }}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 glass-card cursor-pointer"
                  onClick={() => setActiveService(index)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#60A5FA]/25 transition-all duration-300"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#60A5FA] transition-colors text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed text-justify">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gray-300">What Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 glass-card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 