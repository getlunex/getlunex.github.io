
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Logistics Optimizer',
    description: 'Reduced shipping costs by 25% for a major e-commerce client using a predictive routing algorithm.',
    image: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    title: 'Cloud-Native SaaS Platform',
    description: 'Built a highly scalable multi-tenant SaaS application serving over 100,000 active users on AWS infrastructure.',
    image: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    title: 'Customer Service Chatbot',
    description: 'Developed an NLP-based chatbot that resolved 80% of customer queries, improving satisfaction rates.',
    image: 'https://picsum.photos/seed/project3/600/400',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Work</h2>
          <p className="text-lg text-brand-silver mt-2">Success stories from our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-900 rounded-lg overflow-hidden group border border-gray-800"
            >
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-brand-silver">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
