import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants/works.jsx';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  const iconHover = {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  };

  const gradientBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: "4rem",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
            borderColor: "rgba(139, 92, 246, 0.4)"
          }}
          className="bg-slate-900/40 border border-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-purple-900/20 hover:border-purple-900/30"
        >
          
          {/* Header with gradient */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-slate-900 to-purple-900/30 px-6 py-8 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold mb-3"
            >
              Get in Touch
            </motion.h2>
            <motion.div 
              variants={gradientBarVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto rounded-full"
            />
          </motion.div>
          
          {/* Contact content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-12"
          >
            {/* Contact info section */}
            <div className="flex flex-col items-center space-y-6 mb-8">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <motion.div 
                  whileHover={iconHover}
                  className="text-purple-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <motion.p 
                  whileHover={{ color: "#a855f7" }}
                  className="text-lg"
                >
                  {CONTACT.address}
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <motion.div 
                  whileHover={iconHover}
                  className="text-purple-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <motion.a 
                  href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
                  whileHover={{ scale: 1.05, color: "#a855f7" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg hover:text-purple-400 transition-colors"
                >
                  {CONTACT.phoneNo}
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <motion.div 
                  whileHover={iconHover}
                  className="text-purple-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <motion.a 
                  href={`mailto:${CONTACT.email}`}
                  whileHover={{ scale: 1.05, color: "#a855f7" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg hover:text-purple-400 transition-colors"
                >
                  {CONTACT.email}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-slate-800 py-4"
          >
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex gap-6 justify-center"
            >
              <motion.a 
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 10,
                  color: "#ffffff",
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/rorupabi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaGithub />
              </motion.a>
              
              <motion.a 
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: -10,
                  color: "#0077b5",
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rouen-padilla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a 
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 10,
                  color: "#ea4335",
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                href="mailto:rouenpads@gmail.com" 
                alt="rouenpads@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;