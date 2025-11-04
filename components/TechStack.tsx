
import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { IconType } from 'react-icons';

const technologies: { name: string; icon: IconType }[] = [
  { name: 'Python', icon: FaPython },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'AWS', icon: FaAws },
  { name: 'TensorFlow', icon: SiTensorflow },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Technologies We Use</h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="flex flex-col items-center gap-2 text-brand-silver hover:text-brand-blue transition-colors duration-300"
            >
              <tech.icon className="text-5xl md:text-6xl" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
