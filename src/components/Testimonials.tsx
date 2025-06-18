
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "ClosedLoop transformed our business with their innovative solutions. The AI-powered insights have been game-changing for our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The level of expertise and support we received was exceptional. Their team understood our technical requirements perfectly and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Working with ClosedLoop has been a pleasure. Their creative strategy approach helped us increase our conversion rates by 150% in just 6 months.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/15 rounded-full blur-3xl top-[25%] left-[15%] z-[-1] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/20 rounded-full blur-3xl bottom-[25%] right-[20%] z-[-1] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            <span className="text-gray-300">What Our</span>
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 md:p-12 glass-card"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#60A5FA] fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic font-light">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#60A5FA]/30"
              />
              <div className="text-center">
                <div className="font-light text-white text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>

          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 glass-card"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-300" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 glass-card"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6 text-gray-300" />
          </motion.button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#60A5FA]' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
