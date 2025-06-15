
import React from 'react';
import { Clock, Headphones, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Lightning Fast Service",
      description: "Get results in record time with our streamlined processes and efficient workflows."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated support team is always available to help you succeed."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Decades of combined experience delivering exceptional results for clients."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with you as partners to achieve your business objectives."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block text-blue-600">ModernCorp?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through our unique combination of expertise, 
            technology, and customer-centric approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
