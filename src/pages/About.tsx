import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, TrendingUp, Heart, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Heart }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We pour our hearts into every project, ensuring the highest quality standards and attention to detail."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and foster strong partnerships with our clients and artists."
    },
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: Award,
      title: "Integrity & Trust",
      description: "We build lasting relationships based on transparency, honesty, and mutual respect."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "ClosedLoop was established with a vision to revolutionize artist management and event production."
    },
    {
      year: "2016",
      title: "First Major Event",
      description: "Successfully produced our first large-scale music festival with 10,000+ attendees."
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Expanded operations to Europe and Asia, establishing global partnerships."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched innovative digital platforms and virtual event capabilities."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards for excellence in event production and artist management."
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the industry with AI-powered insights and next-generation event experiences."
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
              <span className="text-gray-300">About</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                ClosedLoop
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking entertainment company dedicated to transforming the industry 
              through innovative artist management and cutting-edge event production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6">
                <span className="text-gray-300">Our</span>
                <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                To empower artists and creators with innovative management solutions, 
                while delivering unforgettable experiences that connect audiences with 
                extraordinary talent through cutting-edge technology and creative excellence.
              </p>
              <div className="space-y-4">
                {[
                  "Fostering artistic growth and career development",
                  "Creating immersive and memorable event experiences",
                  "Building sustainable partnerships in the entertainment industry",
                  "Leveraging technology to enhance creative expression"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6">
                <span className="text-gray-300">Our</span>
                <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                  Vision
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                To be the global leader in artist management and event production, 
                setting new standards for creativity, innovation, and audience engagement 
                while building a sustainable ecosystem for artists and creators worldwide.
              </p>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 glass-card">
                <h3 className="text-2xl font-light text-white mb-4">Future Goals</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Expand to 50+ countries by 2030</li>
                  <li>• Launch AI-powered artist discovery platform</li>
                  <li>• Create sustainable event production standards</li>
                  <li>• Establish artist development academy</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl glass-card"
                >
                  <IconComponent className="h-8 w-8 text-[#60A5FA] mx-auto mb-4" />
                  <div className="text-3xl font-light text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gray-300">Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl glass-card"
                >
                  <IconComponent className="h-12 w-12 text-[#60A5FA] mx-auto mb-6" />
                  <h3 className="text-xl font-light text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              <span className="text-gray-300">Our</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Journey
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#60A5FA] to-[#3B82F6]" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 glass-card">
                      <div className="text-2xl font-light text-[#60A5FA] mb-2">{item.year}</div>
                      <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-[#60A5FA] rounded-full border-4 border-[#0D0D0D]" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#60A5FA]/10 to-[#3B82F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-6">
              <span className="text-gray-300">Ready to</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Work Together?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us Today
              </a>
              <a 
                href="mailto:hello@closedloop.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA] hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 