import React from 'react';
import { motion } from 'framer-motion';

// Import profile image
import profileImage from '/images/new image.jpg';

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
              Computer Science Student & AI/ML Enthusiast
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl leading-relaxed font-light"
          >
            Building innovative AI/ML solutions and web applications. Passionate about computer science, 
            data analysis, and creating impactful technology solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-4">
            <motion.button
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover-lift shadow-lg hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full font-semibold text-lg transition-all duration-300 hover-lift shadow-lg hover:shadow-purple-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={codeVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex flex-col items-center text-center space-y-6"
        >
          <div className="relative">
            <motion.div
              className="w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
