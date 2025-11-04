
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaGithub, href: 'https://github.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-brand-silver">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-brand-blue transition-colors duration-300">
              <link.icon />
            </a>
          ))}
        </div>
        <p>© 2025 GetLunex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
