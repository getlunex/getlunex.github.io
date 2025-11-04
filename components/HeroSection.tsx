
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-blue-900/50 animate-gradient-x" />
    <div className="absolute inset-0 bg-black/50" />
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedGradientBackground />
      <div className="relative z-10 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
        >
          Accelerate Your Business with Smarter Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-brand-silver max-w-3xl mx-auto mb-8"
        >
          AI-driven automation and digital transformation for every industry.
        </motion.p>
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
        >
          Explore Solutions
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
