import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Check if EmailJS is configured
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY || 
          EMAILJS_CONFIG.SERVICE_ID === 'your_service_id') {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials.');
      }
      
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Datt Patel',
          to_email: 'dattpatel2020@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setSubmitError(
        error.message.includes('EmailJS is not configured') 
          ? 'Contact form is not configured yet. Please contact me directly at dattpatel2020@gmail.com'
          : 'Failed to send message. Please try again or contact me directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dattpatel2020@gmail.com',
      href: 'mailto:dattpatel2020@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'HMTking',
      href: 'https://github.com/HMTking',
      color: 'from-gray-600 to-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'datt-patel-a312a5256',
      href: 'https://www.linkedin.com/in/datt-patel-a312a5256/',
      color: 'from-blue-600 to-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
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
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Have a question or want to work together? Feel free to drop me a message. 
              I'd love to hear from you!
            </p>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Fill up the form and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover-lift group"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-gray-800 rounded-xl p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      className="inline-block p-6 bg-green-500 rounded-full mb-6"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{submitError}</p>
                      </motion.div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          required
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can I help you?"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        required
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..."
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white rounded-lg font-medium transition-all duration-300 hover-lift"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
