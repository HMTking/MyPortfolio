import React from 'react';
import { motion } from 'framer-motion';

// Import profile image
import profileImage from '/images/new image.png';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center animated-bg">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p className="text-purple-400 text-lg font-semibold tracking-wide uppercase">
              Hello! I'm
            </motion.p>
            <motion.h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Datt <span className="gradient-text">Patel</span>
            </motion.h1>
            <motion.p className="text-xl lg:text-2xl text-gray-300 max-w-2xl font-medium leading-relaxed">
             From idea to impact—one line of code at a time.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={codeVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="relative">
            <motion.div
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage}
                alt="Datt Patel"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Fullstack Developer', 'GATE CS AIR 387', 'GATE DS&AI AIR 877'].map((skill) => (
              <motion.span
                key={skill}
                className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
