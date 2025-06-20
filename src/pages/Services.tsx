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
      description: "End-to-end artist management services tailored to each individual's unique vision, goals, and artistic identity.",
      features: [
        "Strategic career planning & long-term development",
        "Booking & contract negotiations",
        "Tour management & logistics",
        "Personal branding & image consulting",
        "Rights management & financial advisory",
        "Mental wellness and career sustainability support"
      ],
      pricing: {
        basic: 2500,
        premium: 5000,
        enterprise: "Custom"
      },
      caseStudy: {
        title: "Rising Star Success",
        description: "Helped an emerging artist grow from 10K to 1M+ followers in 18 months",
        results: ["500% increase in social media following", "25+ major brand partnerships", "International tour with 50+ dates"]
      }
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
      ],
      pricing: {
        basic: "15% commission",
        premium: "12% commission",
        enterprise: "10% commission"
      },
      caseStudy: {
        title: "Major Festival Booking",
        description: "Secured 50+ artists for a 3-day music festival with 100K attendees",
        results: ["100% artist satisfaction rate", "30% increase in ticket sales", "Featured in major publications"]
      }
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
      ],
      pricing: {
        basic: 10000,
        premium: 25000,
        enterprise: 100000
      },
      caseStudy: {
        title: "Award Show Production",
        description: "Produced a nationally televised award show with 5M+ viewers",
        results: ["98% viewer satisfaction", "15% ratings increase", "Industry recognition award"]
      }
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
      ],
      pricing: {
        basic: "20% commission",
        premium: "15% commission",
        enterprise: "12% commission"
      },
      caseStudy: {
        title: "Global Brand Campaign",
        description: "Facilitated partnership between major artist and global brand worth $2M+",
        results: ["200% increase in brand engagement", "50M+ campaign reach", "Long-term partnership extension"]
      }
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
      ],
      pricing: {
        basic: 3000,
        premium: 7500,
        enterprise: 15000
      },
      caseStudy: {
        title: "Crisis Management",
        description: "Successfully managed PR crisis for high-profile artist within 24 hours",
        results: ["95% positive sentiment recovery", "Zero negative media coverage", "Enhanced public image"]
      }
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
      ],
      pricing: {
        basic: 5000,
        premium: 15000,
        enterprise: 50000
      },
      caseStudy: {
        title: "Stadium Concert Setup",
        description: "Designed and executed production for 50K capacity stadium concert",
        results: ["Zero technical issues", "Award-winning stage design", "Industry benchmark set"]
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Artist Manager",
      company: "Universal Music",
      content: "ClosedLoop transformed our artist's career trajectory. Their strategic approach and industry connections are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Event Director",
      company: "Live Nation",
      content: "The production quality and attention to detail exceeded our expectations. They made our vision come to life perfectly.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Nike",
      content: "Their brand partnership expertise helped us create authentic connections with artists that resonated with our audience.",
      rating: 5
    }
  ];

  const formatPricing = (pricing: any, type: string) => {
    if (typeof pricing === 'string') {
      return pricing;
    }
    return `${formatRupees(convertToRupees(pricing))}${type === 'basic' ? '/month' : type === 'premium' ? '/month' : ''}`;
  };

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
              Crafted with Creativity. Delivered with Precision. End-to-end services that bridge the gap between talent, audience, and brands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-[#60A5FA]/20 text-[#60A5FA] border-[#60A5FA]/30">
                Artist Management
              </Badge>
              <Badge variant="secondary" className="bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30">
                Event Production
              </Badge>
              <Badge variant="secondary" className="bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30">
                Brand Partnerships
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#60A5FA] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-lg"
                      >
                        ✨
                      </motion.div>
                      <span className="text-sm text-pink-300 font-medium">Let's create magic!</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#60A5FA] group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light mb-6">
                <span className="text-gray-300">{services[activeService].title}</span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-light text-white mb-4">What's Included:</h3>
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="h-5 w-5 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 glass-card">
                <h3 className="text-xl font-light text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-400 mb-4">
                  Let's discuss your project and create something amazing together!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-xl"
                    >
                      🎨
                    </motion.div>
                    <span className="text-gray-300">Free consultation call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="text-xl"
                    >
                      ✨
                    </motion.div>
                    <span className="text-gray-300">Custom project planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="text-xl"
                    >
                      🚀
                    </motion.div>
                    <span className="text-gray-300">Creative collaboration</span>
                  </div>
                </div>
                <motion.a
                  href="mailto:hello@closedloop.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Start Your Project! ✨
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 glass-card">
                <h3 className="text-2xl font-light text-white mb-6">Case Study</h3>
                <h4 className="text-xl font-light text-[#60A5FA] mb-4">
                  {services[activeService].caseStudy.title}
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {services[activeService].caseStudy.description}
                </p>
                
                <h5 className="text-lg font-light text-white mb-4">Results:</h5>
                <ul className="space-y-2">
                  {services[activeService].caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20 relative overflow-hidden">
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎭
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-3xl opacity-10"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎪
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="text-6xl mr-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎨
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-light">
                <span className="text-gray-300">Ready to Create</span>
                <span className="block text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                  Something Amazing?
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's bring your creative vision to life! Our team is ready to collaborate and make magic happen. 
              <br />
              <span className="text-pink-300 font-semibold">No boring meetings, just pure creativity! ✨</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Phone, title: "Call Us", contact: "+91 98765 43210", action: "tel:+919876543210" },
                { icon: Mail, title: "Email Us", contact: "hello@closedloop.com", action: "mailto:hello@closedloop.com" },
                { icon: MessageCircle, title: "WhatsApp", contact: "+91 98765 43210", action: "https://wa.me/919876543210" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 glass-card hover:border-pink-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-400 text-sm">{contact.contact}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Let's Talk Magic! ✨
              </motion.a>
              <motion.a 
                href="mailto:hello@closedloop.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white rounded-full font-semibold transition-all duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Us Your Ideas! 💌
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-gray-400 text-sm"
            >
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>Creative collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Passion-driven</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 