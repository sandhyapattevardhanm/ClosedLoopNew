import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism shadow-2xl' : 'bg-transparent'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div className="flex-shrink-0" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.2
        }}>
            <h1 className="text-2xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">ClosedLoop</h1>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'features', 'about', 'services', 'pricing', 'team', 'contact'].map((item, index) => <motion.button key={item} onClick={() => scrollToSection(item)} className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize group" whileHover={{
              scale: 1.05
            }} initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * index
            }}>
                  {item}
                  <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-left" initial={{
                scaleX: 0
              }} whileHover={{
                scaleX: 1
              }} transition={{
                duration: 0.3
              }} />
                </motion.button>)}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && <motion.div className="md:hidden glass-morphism shadow-2xl" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'features', 'about', 'services', 'pricing', 'team', 'contact'].map((item, index) => <motion.button key={item} onClick={() => scrollToSection(item)} className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-medium capitalize w-full text-left" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.1 * index
        }} whileHover={{
          x: 10
        }}>
                {item}
              </motion.button>)}
          </div>
        </motion.div>}
    </motion.nav>;
};
export default Navbar;