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

      {/* Who we are Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <h2 className="text-4xl text-center md:text-5xl font-light mb-6">
          <span className="text-gray-300">Who</span>
          <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
            We Are
          </span>
        </h2>

        <ul className="text-gray-400 list-disc list-inside space-y-4 max-w-5xl mx-auto text-lg leading-relaxed">
          <li>
            Closed Loop is a premium artist and event management company built on the idea that every story deserves a perfect stage. We specialise in crafting immersive experiences by connecting extraordinary talent with memorable moments — through live performances, curated events, and brand-driven activations.
          </li>
          <li>
            Since our inception, we’ve worked behind the scenes and under the spotlight to deliver excellence across corporate gatherings, private functions, weddings, concerts, product launches, and influencer events. Our name, Closed Loop, symbolises the full-circle service we provide from ideation and planning to execution and post-event success.
          </li>
        </ul>
      </section>


      {/* Values Section 
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
      </section>*/}

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

      <Footer />
    </div>
  );
};

export default About; 