import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Smartphone, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'JavaScript', 'SQL', 'C'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Machine Learning & AI',
      skills: ['Scikit-learn', 'NumPy', 'Pandas', 'TensorFlow', 'OpenCV'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Layers,
      title: 'Frontend Libraries', 
      skills: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Linux'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Competitive Programming',
      skills: ['Data Structures', 'Algorithms', 'LeetCode', 'Problem Solving', 'CodeChef'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover-lift group border border-gray-200"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent-600 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      custom={skillIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors group/skill border border-gray-200"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-gray-700 font-medium group-hover/skill:text-gray-900 transition-colors">
                        {skill}
                      </span>
                      <motion.div
                        className="w-2 h-2 bg-accent-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
