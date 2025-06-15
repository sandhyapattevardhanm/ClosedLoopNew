
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Handle newsletter signup
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied customers who trust us with their business. 
              Subscribe to our newsletter for the latest updates and insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
              />
              <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">Contact Us</div>
              <p className="text-blue-100">hello@moderncorp.com</p>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Visit Us</div>
              <p className="text-blue-100">123 Innovation Street</p>
              <p className="text-blue-100">Tech City, TC 12345</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Follow Us</div>
              <p className="text-blue-100">Stay connected on social</p>
              <p className="text-blue-100">@moderncorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
