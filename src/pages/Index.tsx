import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <Hero />
        <MissionVision />
        <Values />
        <Services />
        <WhyChooseUs />
        {/*<Team />
        {/*<Testimonials />*/}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
