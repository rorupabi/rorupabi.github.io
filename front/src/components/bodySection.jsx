import React from 'react'
import { motion } from 'framer-motion'
import ProfilePic from '../assets/profilepic.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const BodySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const socialItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <section id='about' className='min-h-screen flex items-center py-20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className='flex flex-col justify-center text-center lg:text-left order-2 lg:order-1'
            variants={itemVariants}
          >
            <motion.p 
              className='text-indigo-400 font-medium text-sm sm:text-base'
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white'
              variants={itemVariants}
            >
              Rouen Padilla
            </motion.h1>
            
            <motion.h2 
              className='bg-gradient-to-r from-indigo-300 to-violet-500 bg-clip-text text-2xl sm:text-3xl font-semibold text-transparent mb-4'
              variants={itemVariants}
            >
              Aspiring Web Developer
            </motion.h2>
            
            <motion.p 
              className='text-base sm:text-lg text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-start px-2 sm:px-0'
              variants={itemVariants}
            >
              I'm a Computer Science graduate passionate about creating interactive, user-friendly web experiences. With a strong foundation in React, JavaScript, and UI/UX & SEO principles, 
              I build optimized interfaces that work seamlessly across all devices. As a recent graduate, 
              I have an hands-on experience in Web Development while excelling on Front-End development with growing 
              Full-Stack capabilities using Back-End languages such as Node.js, Express.js, and Laravel.
            </motion.p>
            
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start px-4 sm:px-0'
              variants={itemVariants}
            >
              <motion.a 
                href="https://www.canva.com/design/DAGY42H07Tg/hgU1RlZ5WS0EBSiF3gBhkA/view"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium text-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
              <motion.a 
                href="#projects" 
                className='bg-transparent hover:bg-gray-800 text-white border border-gray-600 px-6 py-3 rounded-full transition-all duration-300 font-medium text-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className='flex gap-5 justify-center lg:justify-start'
              variants={socialVariants}
            >
              <motion.a 
                href="https://github.com/rorupabi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/rouen-padilla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:rouenpads@gmail.com" 
                alt="rouenpads@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                variants={socialItemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className='flex justify-center order-1 lg:order-2 mb-8 lg:mb-0'
            variants={imageVariants}
          >
            <div className='relative max-w-sm sm:max-w-md w-full px-4 sm:px-0'>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-xl'></div>
              <motion.img
                src={ProfilePic}
                alt="Rouen Padilla"
                className='relative rounded-2xl w-full h-full object-cover shadow-2xl'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BodySection