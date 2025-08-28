import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, GraduationCap, ChevronLeft, ChevronRight, Calendar, Star, ExternalLink, Shield } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  year: number;
  description: string;
  type: 'competition' | 'academic' | 'certification';
  icon: React.ComponentType<any>;
  color: string;
  link?: string;
  linkText?: string;
}

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'GATE CS 2023 - All India Rank 387',
      organization: 'Computer Science and Information Technology',
      year: 2023,
      description: 'Secured All India Rank 387 in GATE 2023 CS examination out of 170,000+ candidates, demonstrating exceptional analytical and technical skills.',
      type: 'academic',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
      link: 'https://drive.google.com/file/d/1rBwPXMwiNWEitnzEPDT_OonJdSBt_yKC/view?usp=sharing',
      linkText: 'View Result'
    },
    {
      id: 2,
      title: 'GATE DA 2024 - All India Rank 877',
      organization: 'Data Science and Artificial Intelligence',
      year: 2024,
      description: 'Achieved All India Rank 877 in GATE 2024 Data Science and AI out of 57,000+ candidates, showcasing expertise in emerging technologies.',
      type: 'academic',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-500',
      link: 'https://drive.google.com/file/d/1adYMu7XRM04OI1Meji8Ttu8iaRVngz4E/view?usp=sharing',
      linkText: 'View Result'
    },
    {
      id: 3,
      title: 'JEE Main 2020 - 97.4 Percentile',
      organization: 'National Testing Agency',
      year: 2020,
      description: 'Achieved 97.4 percentile in JEE Main 2020, demonstrating exceptional problem-solving abilities in Mathematics, Physics, and Chemistry.',
      type: 'academic',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://drive.google.com/file/d/1WHdq2zMr3wZIog2d6rYWepFPItaNebAK/view?usp=sharing',
      linkText: 'View Result'
    },
    {
      id: 4,
      title: 'India Space Lab Certificate',
      organization: 'India Space Lab',
      year: 2024,
      description: 'Completed specialized training and certification program in space technology and satellite systems, expanding knowledge in aerospace engineering.',
      type: 'certification',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500',
      link: 'https://drive.google.com/file/d/1NINSv0MSeIXG-q75cWkWgwXXCTFU9f0W/view?usp=sharing',
      linkText: 'View Certificate'
    },
    {
      id: 5,
      title: 'FACT APP Internship Certificate',
      organization: 'FACT APP - Growth Intern',
      year: 2023,
      description: 'Successfully completed the FACT APP internship program as a Growth Intern from June 8th to July 6th, 2023, demonstrating excellence in growth strategies and business development.',
      type: 'certification',
      icon: Shield,
      color: 'from-rose-500 to-pink-500',
      link: 'https://drive.google.com/file/d/12unxQ-qv5np51tbocOfTIZdXZ1DIpXey/view?usp=sharing',
      linkText: 'View Certificate'
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, achievements.length]);

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

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
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'competition':
        return { label: 'Competition', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-400', borderColor: 'border-yellow-500/30' };
      case 'academic':
        return { label: 'Academic', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400', borderColor: 'border-purple-500/30' };
      case 'certification':
        return { label: 'Certification', bgColor: 'bg-green-500/20', textColor: 'text-green-400', borderColor: 'border-green-500/30' };
      default:
        return { label: 'Achievement', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400', borderColor: 'border-blue-500/30' };
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-800">
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
              Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Academic achievements and competitive examination rankings that showcase 
              my dedication to excellence in computer science and engineering.
            </p>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          {/* Achievement Carousel */}
          <motion.div variants={itemVariants} className="relative">
            {/* Navigation Instructions */}
            <div className="flex justify-center items-center mb-8">
              <motion.div
                className="flex items-center space-x-4 text-gray-400"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <span className="text-sm">Drag to explore</span>
                <div className="flex space-x-1">
                  {achievements.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-600'
                      }`}
                      onClick={() => {
                        handleManualNavigation(() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        });
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Navigation Buttons - Fixed positioning outside animated content */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full backdrop-blur-sm transition-colors"
                onClick={() => handleManualNavigation(prevSlide)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full backdrop-blur-sm transition-colors"
                onClick={() => handleManualNavigation(nextSlide)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25, duration: 1 },
                    opacity: { duration: 0.8 }
                  }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 lg:p-12"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragStart={() => setIsAutoPlaying(false)}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe > 10000) {
                      handleManualNavigation(() => {
                        setDirection(1);
                        nextSlide();
                      });
                    } else if (swipe < -10000) {
                      handleManualNavigation(() => {
                        setDirection(-1);
                        prevSlide();
                      });
                    } else {
                      // Resume auto-play after 5 seconds if no swipe occurred
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Achievement Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`p-4 rounded-full bg-gradient-to-r ${achievements[currentIndex].color}`}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {React.createElement(achievements[currentIndex].icon, { className: "w-8 h-8 text-white" })}
                        </motion.div>
                        <div>
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeInfo(achievements[currentIndex].type).bgColor} ${getTypeInfo(achievements[currentIndex].type).textColor} border ${getTypeInfo(achievements[currentIndex].type).borderColor}`}>
                            {getTypeInfo(achievements[currentIndex].type).label}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-white">
                          {achievements[currentIndex].title}
                        </h3>
                        <div className="flex items-center space-x-4 text-purple-400">
                          <span className="font-medium">{achievements[currentIndex].organization}</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{achievements[currentIndex].year}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {achievements[currentIndex].description}
                        </p>
                        {achievements[currentIndex].link && (
                          <motion.a
                            href={achievements[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>{achievements[currentIndex].linkText}</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Visual Element - Hidden on mobile */}
                    <div className="relative hidden lg:block">
                      <motion.div
                        className="w-64 h-64 mx-auto relative"
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${achievements[currentIndex].color} rounded-full opacity-20 blur-xl`}></div>
                        <div className={`absolute inset-4 bg-gradient-to-r ${achievements[currentIndex].color} rounded-full flex items-center justify-center`}>
                          {React.createElement(achievements[currentIndex].icon, { className: "w-24 h-24 text-white" })}
                        </div>
                        <motion.div
                          className="absolute -inset-4 border-2 border-purple-500/30 rounded-full"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'GATE Qualifications', value: '2', icon: GraduationCap },
              { label: 'JEE Percentile', value: '97.4', icon: Trophy },
              { label: 'Certifications', value: '2', icon: Award },
              { label: 'Total Achievements', value: '5', icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gray-900 rounded-xl p-6 text-center hover-lift"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-block p-3 bg-purple-600 rounded-full mb-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
