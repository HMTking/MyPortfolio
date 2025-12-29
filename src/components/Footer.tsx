import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-100 py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Contact Information with Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="mailto:dattpatel2020@gmail.com"
              className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg hover:scale-110 transition-transform"
              whileHover={{ y: -2 }}
              title="dattpatel2020@gmail.com"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
            
            <motion.a
              href="https://github.com/HMTking"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-br from-gray-600 to-gray-500 rounded-lg hover:scale-110 transition-transform"
              whileHover={{ y: -2 }}
              title="HMTking"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/datt-patel-a312a5256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg hover:scale-110 transition-transform"
              whileHover={{ y: -2 }}
              title="datt-patel-a312a5256"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center mt-6 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Datt Patel. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
