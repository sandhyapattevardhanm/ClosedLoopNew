
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Values />
      <Testimonials />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
