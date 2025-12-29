import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto"></div>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 shadow-lg">
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-600 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      Software Development Engineer (SDE)
                    </h3>
                    <div className="flex items-center gap-2 text-accent-600 font-semibold mb-2">
                      <Building2 className="w-5 h-5" />
                      <span>MAQ Software</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 whitespace-nowrap self-start">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Current</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <MapPin className="w-5 h-5 text-accent-600" />
                <span className="font-medium">Noida, India</span>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-base">
                  Currently working as a Software Development Engineer at MAQ Software, contributing to innovative software solutions and leveraging cutting-edge technologies to deliver high-quality products.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
