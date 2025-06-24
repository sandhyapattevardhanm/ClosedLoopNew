import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import XIcon from '@/components/XIcon';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Careers', path: '/contact' },
      { name: 'Press', path: '/contact' }
    ],
    services: [
      { name: 'Artist Management', path: '/services' },
      { name: 'Event Production', path: '/services' },
      { name: 'Talent Booking', path: '/services' },
      { name: 'Brand Partnerships', path: '/services' }
    ],
    support: [
      { name: 'Help Center', path: '/contact' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Privacy Policy', path: '/contact' },
      { name: 'Terms of Service', path: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: XIcon, href: '#', label: 'X (Twitter)' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/Blue Logo no bg.png"
                alt="ClosedLoop Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming the entertainment industry through innovative artist management and cutting-edge event production.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#60A5FA] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hello@closedloop.com"
                  className="text-sm underline-offset-2 hover:underline"
                >
                  hello@closedloop.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#60A5FA] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+11231234567"
                  className="text-sm underline-offset-2 hover:underline"
                >
                  +1 (123) 123-4567
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#60A5FA] transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Bengaluru, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-light text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-light text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-light text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ClosedLoop. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      color: '#60A5FA',
                      y: -2
                    }}
                    className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
