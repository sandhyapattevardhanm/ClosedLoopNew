import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Values from '../components/Values';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Values />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
