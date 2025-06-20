import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star, Check, ShoppingCart, CreditCard, Ticket, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const TicketPage = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const convertToRupees = (usd: number) => {
    return Math.round(usd * 83);
  };

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2024",
      date: "July 15-17, 2024",
      time: "3:00 PM - 11:00 PM",
      location: "Central Park, New York",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Three days of incredible music featuring top artists from around the world.",
      tickets: [
        {
          type: "General Admission",
          price: 89,
          features: ["Access to all stages", "Food & beverage vendors", "General seating area", "Festival merchandise"]
        },
        {
          type: "VIP Pass",
          price: 299,
          features: ["All General Admission benefits", "Exclusive VIP area", "Complimentary food & drinks", "Meet & greet opportunities", "Premium viewing areas"]
        },
        {
          type: "Premium VIP",
          price: 599,
          features: ["All VIP benefits", "Backstage access", "Artist meet & greets", "Luxury accommodations", "Personal concierge service"]
        }
      ]
    },
    {
      id: 2,
      title: "Electronic Dance Night",
      date: "August 8, 2024",
      time: "8:00 PM - 2:00 AM",
      location: "Warehouse District, Brooklyn",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An electrifying night of EDM featuring world-renowned DJs and spectacular light shows.",
      tickets: [
        {
          type: "Early Bird",
          price: 45,
          features: ["General admission", "Access to main stage", "Bar access"]
        },
        {
          type: "Regular",
          price: 65,
          features: ["All Early Bird benefits", "Access to all stages", "Complimentary drink"]
        },
        {
          type: "VIP Experience",
          price: 150,
          features: ["All Regular benefits", "VIP lounge access", "Premium bar service", "Exclusive viewing areas"]
        }
      ]
    },
    {
      id: 3,
      title: "Jazz Under the Stars",
      date: "September 12, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Riverside Amphitheater",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An intimate evening of jazz music under the open sky with gourmet dining options.",
      tickets: [
        {
          type: "Standard",
          price: 75,
          features: ["General seating", "Welcome drink", "Access to food vendors"]
        },
        {
          type: "Premium",
          price: 125,
          features: ["Reserved seating", "Gourmet dinner", "Wine pairing", "Meet the artists"]
        }
      ]
    }
  ];

  const selectedEvent = upcomingEvents.find(event => event.id === 1); // Default to first event

  const handleBooking = () => {
    setIsBooking(true);
    // Here you would typically integrate with a payment processor
    setTimeout(() => {
      setIsBooking(false);
      alert('Booking successful! Check your email for confirmation.');
    }, 2000);
  };

  const calculateTotal = () => {
    const ticket = selectedEvent?.tickets.find(t => t.type === selectedTicket);
    return ticket ? ticket.price * quantity : 0;
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <FloatingElements />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-[20%] left-[10%] z-[-1] animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/15 rounded-full blur-3xl bottom-[15%] right-[15%] z-[-1] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="text-gray-300">Get Your</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                Tickets
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Secure your spot at the most exciting events. From intimate concerts to massive festivals, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-[#60A5FA]/20 text-[#60A5FA] border-[#60A5FA]/30">
                <Calendar className="h-4 w-4 mr-2" />
                Upcoming Events
              </Badge>
              <Badge variant="secondary" className="bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30">
                <Ticket className="h-4 w-4 mr-2" />
                Instant Booking
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gray-300">Featured</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Event
              </span>
            </h2>
          </motion.div>

          {selectedEvent && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <Badge className="bg-[#60A5FA] text-white mb-2">Featured Event</Badge>
                    <h3 className="text-2xl font-light mb-2">{selectedEvent.title}</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#60A5FA]" />
                    <span className="text-gray-300">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#60A5FA]" />
                    <span className="text-gray-300">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#60A5FA]" />
                    <span className="text-gray-300">{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light text-white mb-6">Select Your Tickets</h3>
                
                {selectedEvent.tickets.map((ticket, index) => (
                  <Card 
                    key={index}
                    className={`bg-white/5 backdrop-blur-md border border-white/10 glass-card cursor-pointer transition-all duration-300 ${
                      selectedTicket === ticket.type ? 'border-[#60A5FA] shadow-lg shadow-[#60A5FA]/25' : ''
                    }`}
                    onClick={() => setSelectedTicket(ticket.type)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">{ticket.type}</CardTitle>
                          <CardDescription className="text-gray-400">
                            {formatRupees(convertToRupees(ticket.price))} per ticket
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-[#60A5FA]/20 text-[#60A5FA] border-[#60A5FA]/30">
                          {formatRupees(convertToRupees(ticket.price))}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {ticket.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="h-4 w-4 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                {selectedTicket && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 glass-card"
                  >
                    <h4 className="text-lg font-light text-white mb-4">Booking Details</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                        <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#60A5FA]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1a1a1a] border-white/10">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <span className="text-gray-300">Total:</span>
                        <span className="text-2xl font-light text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                          {formatRupees(convertToRupees(calculateTotal()))}
                        </span>
                      </div>

                      <Button
                        onClick={handleBooking}
                        disabled={isBooking}
                        className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white"
                      >
                        {isBooking ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-5 w-5 mr-2" />
                            Book Now
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gray-300">All</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Events
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden glass-card group hover:shadow-xl hover:shadow-[#60A5FA]/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[#60A5FA] text-white">Upcoming</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="h-4 w-4 text-[#60A5FA]" />
                      <span className="text-gray-400">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-[#60A5FA]" />
                      <span className="text-gray-400">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Starting at {formatRupees(convertToRupees(Math.min(...event.tickets.map(t => t.price))))}
                    </div>
                    <Button size="sm" variant="outline" className="border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA] hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#60A5FA]/10 to-[#3B82F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-6">
              <span className="text-gray-300">Need Help with</span>
              <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                Your Booking?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team is here to help you with any questions about events, tickets, or special arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#60A5FA] text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
              <a 
                href="mailto:hello@closedloop.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA] hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TicketPage; 