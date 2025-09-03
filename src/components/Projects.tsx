import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

// Import images
import aslImage from '/images/ASL final.webp';
import financeImage from '/images/finace traker.png';
import plantImage from '/images/final E plant website.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'American Sign Language (ASL) to Speech Converter',
      description: 'ML system that converts ASL gestures to speech and complete sentences in real time. Implemented multilayer perceptron (MLP) with time-frame separation for enhanced gesture recognition.',
      image: aslImage,
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'gTTS', 'Machine Learning', 'Computer Vision'],
      githubUrl: 'https://github.com/HMTking/American-Sign-Language-To-Speech-and-Sentence-Conversion/tree/main',
      category: 'machine-learning'
    },
    {
      id: 2,
      title: 'Personal Finance Tracker',
      description: 'Web-based finance tracker to record income/expenses with persistent SQLite storage and responsive UI. Developed RESTful APIs for transaction CRUD and financial summary with real-time dashboard updates.',
      image: financeImage,
      technologies: ['Flask', 'SQLite', 'Chart.js', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/HMTking/personal-finance-tracker-By-DattPatel',
      liveUrl: 'https://personal-finance-tracker-by-dattpatel.onrender.com',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Mini Plant Store - Greenify',
      description: 'Plant e-commerce application with customer and admin modules using the MERN stack and Vite. Implemented features including product browsing, cart management, order history, and checkout with authentication.',
      image: plantImage,
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite', 'JWT', 'Cloudinary'],
      githubUrl: 'https://github.com/HMTking/greenify',
      liveUrl: 'https://greenify-frontend-chi.vercel.app/',
      category: 'fullstack'
    }
  ];

  const displayedProjects = projects;

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
    <section id="projects" className="py-20 bg-gray-800">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Here are some of the projects I've worked on, showcasing my skills in various 
              technologies and problem domains.
            </p>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-gray-900 rounded-xl overflow-hidden hover-lift group flex flex-col h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <motion.a
                          href={project.githubUrl}
                          className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
