import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ejaz@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
          >
            <span>© 2024 Ejaz Ahmad. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and React</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 pt-4 border-t border-white/10 text-center text-sm text-gray-500"
        >
          "Crafting clean, responsive websites and building intelligent systems with code"
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

