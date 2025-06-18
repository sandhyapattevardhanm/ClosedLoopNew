
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Artist Management', href: '#services' },
      { name: 'Event Production', href: '#services' },
      { name: 'Talent Network', href: '#' },
      { name: 'Support', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API', href: '#' }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <footer className="relative bg-[#0D0D0D] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[300px] bg-gradient-to-r from-[#60A5FA]/10 to-[#3B82F6]/5 rounded-full blur-3xl top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[-1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-6 tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                ClosedLoop
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming entertainment through innovative artist management and event production. 
              We're committed to delivering exceptional experiences that elevate tomorrow's stars.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-light text-white mb-6 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Mail, text: "hello@closedloop.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "Tech City, TC 12345" }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <IconComponent className="h-5 w-5 text-[#60A5FA]" />
                  <span className="text-gray-400">{contact.text}</span>
                </motion.div>
              );
            })}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2024 ClosedLoop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  {policy}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
