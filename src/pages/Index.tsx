import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <Values />
        <Team />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
