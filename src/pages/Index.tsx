
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
