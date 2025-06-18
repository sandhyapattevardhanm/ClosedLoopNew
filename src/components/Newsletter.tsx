
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Handle newsletter signup
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      {/* Enhanced Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#60A5FA]/30 to-[#3B82F6]/20 rounded-full blur-3xl top-[10%] left-[50%] transform -translate-x-1/2 z-[-1] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#60A5FA]/15 rounded-full blur-3xl bottom-[20%] right-[10%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <motion.div 
              className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 glass-card"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)" }}
            >
              <Mail className="h-10 w-10 text-[#60A5FA]" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust us with their business. 
              Subscribe to our newsletter for the latest updates and insights.
            </p>
          </div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#60A5FA] backdrop-blur-md"
              />
              <Button 
                type="submit" 
                className="bg-[#3B82F6] hover:bg-[#2563EB] hover:shadow-[0_0_20px_#60A5FA] text-white px-6 py-3 rounded-xl transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Contact Us", line1: "hello@closedloop.com", line2: "+1 (555) 123-4567" },
              { title: "Visit Us", line1: "123 Innovation Street", line2: "Tech City, TC 12345" },
              { title: "Follow Us", line1: "Stay connected on social", line2: "@closedloop" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)" 
                }}
                viewport={{ once: true }}
              >
                <div className="text-xl font-light text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text mb-2">{contact.title}</div>
                <p className="text-gray-400 text-sm">{contact.line1}</p>
                <p className="text-gray-400 text-sm">{contact.line2}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
