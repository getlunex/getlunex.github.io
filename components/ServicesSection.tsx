
import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaCloud, FaChartBar, FaLaptopCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: FaRobot,
    title: 'AI Automation & Chatbots',
    description: 'Streamline operations and enhance customer engagement with custom AI-powered automation and intelligent chatbots.',
  },
  {
    icon: FaCode,
    title: 'Web & App Development',
    description: 'Crafting beautiful, high-performance websites and mobile applications tailored to your business needs.',
  },
  {
    icon: FaCloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and reliable cloud solutions on AWS, Azure, and Google Cloud to power your digital ecosystem.',
  },
  {
    icon: FaChartBar,
    title: 'Data Analytics & Visualization',
    description: 'Turn raw data into actionable insights with advanced analytics, reporting, and intuitive data visualizations.',
  },
  {
    icon: FaLaptopCode,
    title: 'IT Consulting & Digital Strategy',
    description: 'Expert guidance to align your technology roadmap with your business goals for long-term success.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
          <p className="text-lg text-brand-silver mt-2">Solutions to fuel your growth.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-brand-blue transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-brand-blue text-4xl mb-4">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-brand-silver">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
