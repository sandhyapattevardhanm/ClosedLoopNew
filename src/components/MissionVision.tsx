// components/MissionVision.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MissionVision: React.FC = () => {
    const visionPoints = [
        "To redefine Live Event space by creating a seamless loop between talent, opportunity, and audience experiences.",
        "We envision a world where creative voices are heard, nurtured, and amplified on a global scale, where every artist has a pathway to create, explore and collaborate in a way that sustainable success is attained.",
    ];

    const missionPoints = [
        "To empower talent through full-spectrum artist management, strategic partnerships, and immersive entertainment experiences. We believe we are the best end-to-end solution for live events with expertise and a world-class vision in Production, Promotion and Ticketing.",
        "At Closed Loop, we guide careers with precision, elevate creative voices with intention, and build bridges between artistry and opportunity. From behind-the-scenes planning to centre-stage execution, we’re committed to delivering excellence on every platform, in every genre.",
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Vision Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="border border-gray-600 rounded-xl p-6 h-full"
                    >
                        <h2 className="text-4xl font-light mb-6">
                            <span className="text-gray-300">Our</span>
                            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                                Vision
                            </span>
                        </h2>
                        <div className="space-y-4">
                            {visionPoints.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle className="h-6 w-6 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="border border-gray-600 rounded-xl p-6 h-full"
                    >
                        <h2 className="text-4xl font-light mb-6">
                            <span className="text-gray-300">Our</span>
                            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text">
                                Mission
                            </span>
                        </h2>
                        <div className="space-y-4">
                            {missionPoints.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle className="h-6 w-6 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;
