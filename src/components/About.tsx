import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-accent-600 mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent-700 flex items-center">
                <GraduationCap className="mr-3 w-6 h-6" />
                Bio
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I am Datt Patel, a Computer Science and Engineering professional from the Indian Institute of Information Technology, Surat. I secured an All India Rank of 387 in GATE CS among over 2 lakh+ candidates, and an All India Rank of 877 in GATE Data Science and Artificial Intelligence. I possess a strong command of core computer science fundamentals, backed by hands-on expertise in software development, artificial intelligence, and data science, enabling me to build impactful, real-world technology.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-accent-700 flex items-center">
                  <GraduationCap className="mr-2 w-5 h-5" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover-lift min-h-[8rem] flex flex-col justify-between overflow-hidden">
                    <div className="flex-shrink-0">
                      <h5 className="font-semibold text-gray-900 leading-tight break-words">Indian Institute of Information Technology, Surat</h5>
                      <p className="text-accent-700 text-sm mt-1 leading-tight break-words">Bachelor of Technology in Computer Science</p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      <p className="text-gray-600 text-sm whitespace-nowrap">2022 - 2026</p>
                      <p className="text-gray-600 text-sm whitespace-nowrap">CGPA: 8.64/10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-accent-700 flex items-center">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Experience
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover-lift min-h-[8rem] flex flex-col justify-between overflow-hidden">
                    <div className="flex-shrink-0">
                      <h5 className="font-semibold text-gray-900 leading-tight break-words">India Space Lab</h5>
                      <p className="text-accent-700 text-sm mt-1 leading-tight break-words">Summer Intern - Data Science and Technology</p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      <p className="text-gray-600 text-sm whitespace-nowrap">2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
