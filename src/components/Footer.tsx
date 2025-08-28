import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>© {currentYear} Made by Tinni's</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300 hover-lift"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Decorative Line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </footer>
  );
};

export default Footer;
