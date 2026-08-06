import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants/works.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 flex items-center scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's connect and bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 md:p-12"
          >
            {/* Contact info grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-purple-400 mb-4"
                >
                  <FaMapMarkerAlt size={28} />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">{CONTACT.address}</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-purple-400 mb-4"
                >
                  <FaPhone size={28} />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <motion.a 
                  href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
                  whileHover={{ color: "#a855f7" }}
                  className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                >
                  {CONTACT.phoneNo}
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-purple-400 mb-4"
                >
                  <FaEnvelope size={28} />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <motion.a 
                  href={`mailto:${CONTACT.email}`}
                  whileHover={{ color: "#a855f7" }}
                  className="text-gray-400 text-sm hover:text-purple-400 transition-colors break-all"
                >
                  {CONTACT.email}
                </motion.a>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-10"
            />

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-white font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-6 justify-center">
                <motion.a 
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/rorupabi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                >
                  <FaGithub size={24} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: -5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/rouen-padilla" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:rouenpads@gmail.com" 
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                >
                  <FaEnvelope size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Optional: Add some extra spacing at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>© 2025 Rouen Padilla. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;