import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "New York",
      country: "USA",
      address: "123 Broadway, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "nyc@closedloop.com",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "London",
      country: "UK",
      address: "456 Oxford Street, London, W1C 1AP",
      phone: "+44 20 7123 4567",
      email: "london@closedloop.com",
      hours: "Mon-Fri: 9AM-6PM GMT"
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: "hello@closedloop.com",
      response: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with our support team in real-time",
      contact: "Start Chat",
      response: "Average response time: 2 minutes"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive artist management, event production, talent booking, brand partnerships, media & PR, and production setup services."
    },
    {
      question: "How quickly can you start working on a project?",
      answer: "We can typically begin work within 1-2 weeks of contract signing, depending on project scope and current capacity."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We have offices in New York, London, and Tokyo, and work with clients worldwide."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small events can be completed in 2-4 weeks, while large productions may take 3-6 months."
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
              <span className="text-gray-300">Get in</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to start your next project? We'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 glass-card text-center"
                >
                  <IconComponent className="h-12 w-12 text-[#60A5FA] mx-auto mb-6" />
                  <h3 className="text-xl font-light text-white mb-4">{method.title}</h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <div className="text-[#60A5FA] font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.response}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-8">
                <span className="text-gray-300">Send us a</span>
                <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                  Message
                </span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA]"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#60A5FA]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-white/10">
                          <SelectItem value="artist-management">Artist Management</SelectItem>
                          <SelectItem value="talent-booking">Talent Booking</SelectItem>
                          <SelectItem value="event-production">Event Production</SelectItem>
                          <SelectItem value="brand-partnerships">Brand Partnerships</SelectItem>
                          <SelectItem value="media-pr">Media & PR</SelectItem>
                          <SelectItem value="production-setup">Production Setup</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#60A5FA] min-h-[120px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-8">
                <span className="text-gray-300">Our</span>
                <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                  Offices
                </span>
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 glass-card"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-light text-white">{office.city}</h3>
                        <p className="text-gray-400">{office.country}</p>
                      </div>
                      <Badge variant="secondary" className="bg-[#60A5FA]/20 text-[#60A5FA] border-[#60A5FA]/30">
                        Office
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-[#60A5FA] flex-shrink-0" />
                        <span className="text-gray-300">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-[#60A5FA] flex-shrink-0" />
                        <span className="text-gray-300">{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[#60A5FA] flex-shrink-0" />
                        <span className="text-gray-300">{office.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 