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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-purple-600 mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400 flex items-center">
                <GraduationCap className="mr-3 w-6 h-6" />
                Bio
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm Datt Patel, a final-year Computer Science and Engineering student at Indian Institute of Information Technology, Surat, and a GATE CS 2025 achiever with All India Rank 387 out of 170,000+ aspirants. I also secured All India Rank 877 in GATE Data Science and Artificial Intelligence. I have a strong foundation in computer science fundamentals, with a keen interest in software development, artificial intelligence, and data science. With a disciplined approach and sharp problem-solving mindset, I aspire to contribute as a Software Engineer / Data Scientist, creating technology that drives real impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-400 flex items-center">
                  <GraduationCap className="mr-2 w-5 h-5" />
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover-lift h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-white">Bachelor of Technology in Computer Science</h5>
                      <p className="text-purple-400 text-sm">IIIT Surat</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">2022 - 2026</p>
                      <p className="text-gray-400 text-sm">CGPA: 8.64/10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-400 flex items-center">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Experience
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover-lift h-32 flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-white">Summer Intern - Data Science and Technology</h5>
                      <p className="text-purple-400 text-sm">India Space Lab</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">2025</p>
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
