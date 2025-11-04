
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About GetLunex</h2>
          <p className="text-lg text-brand-silver leading-relaxed">
            At GetLunex, our mission is to empower businesses with transformative technology. We specialize in creating intelligent, scalable, and efficient solutions by harnessing the power of Artificial Intelligence, Cloud Computing, and custom Automation. Our team of experts is dedicated to helping you navigate the complexities of digital transformation and achieve sustainable growth in a rapidly evolving market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
