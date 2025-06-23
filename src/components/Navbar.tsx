import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Tickets', path: '/ticket' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl'
          : 'bg-black/80 backdrop-blur-lg border-b border-white/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/Blue Logo no bg.png"
                alt="ClosedLoop Logo"
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                      ? 'text-[#60A5FA]'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Information 
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <a 
                href="tel:+15551234567"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#60A5FA] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="mailto:hello@closedloop.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#60A5FA] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">hello@closedloop.com</span>
              </a>
            </motion.div>
          </div> */}

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden relative z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.path)
                        ? 'text-[#60A5FA]'
                        : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-4 border-t border-white/20 space-y-3"
              >
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#60A5FA] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <a
                  href="mailto:hello@closedloop.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#60A5FA] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">hello@closedloop.com</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;