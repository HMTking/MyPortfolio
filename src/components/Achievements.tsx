import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, GraduationCap, Calendar, Shield } from 'lucide-react';

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
        return { label: 'Competition', bgColor: 'bg-yellow-50', textColor: 'text-yellow-700', borderColor: 'border-yellow-200' };
      case 'academic':
        return { label: 'Academic', bgColor: 'bg-accent-50', textColor: 'text-accent-700', borderColor: 'border-accent-200' };
      case 'certification':
        return { label: 'Certification', bgColor: 'bg-green-50', textColor: 'text-green-700', borderColor: 'border-green-200' };
      default:
        return { label: 'Achievement', bgColor: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-200' };
    }
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto"></div>
          </motion.div>

          {/* Achievement Carousel */}
          <motion.div variants={itemVariants} className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
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
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200 cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragStart={() => setIsAutoPlaying(false)}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipeThreshold = 50; // minimum distance to trigger swipe
                    const swipePower = Math.abs(offset.x) * velocity.x;
                    
                    // Swipe left (next)
                    if (offset.x < -swipeThreshold || swipePower < -500) {
                      handleManualNavigation(() => {
                        setDirection(1);
                        nextSlide();
                      });
                    } 
                    // Swipe right (previous)
                    else if (offset.x > swipeThreshold || swipePower > 500) {
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
                  <div className="max-w-4xl mx-auto">
                    {/* Achievement Info */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2.5 rounded-full bg-gradient-to-r ${achievements[currentIndex].color}`}
                        >
                          {React.createElement(achievements[currentIndex].icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium ${getTypeInfo(achievements[currentIndex].type).bgColor} ${getTypeInfo(achievements[currentIndex].type).textColor} border ${getTypeInfo(achievements[currentIndex].type).borderColor}`}>
                            {getTypeInfo(achievements[currentIndex].type).label}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                          {achievements[currentIndex].title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-accent-600 text-sm">
                          <span className="font-medium">{achievements[currentIndex].organization}</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{achievements[currentIndex].year}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                          {achievements[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots - Outside the box */}
            <div className="flex justify-center items-center mt-6">
              <div className="flex space-x-1">
                {achievements.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent-600 w-8' : 'bg-gray-300'
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
