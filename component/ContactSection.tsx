
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-brand-silver mt-2">Have a project in mind? We'd love to hear from you.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Your Email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Your Message" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
          <p className="text-center mt-8 text-brand-silver">
            Or email us directly at <a href="mailto:contact@getlunex.com" className="text-brand-blue hover:underline">contact@getlunex.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
