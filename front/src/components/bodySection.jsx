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
    <section id='hero' className='min-h-screen flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className='flex flex-col justify-center text-center lg:text-left'
            variants={itemVariants}
          >
            <motion.p 
              className='text-indigo-400 font-medium'
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className='text-6xl font-bold mb-2 text-white'
              variants={itemVariants}
            >
              Rouen Padilla
            </motion.h1>
            
            <motion.h2 
              className='bg-gradient-to-r from-indigo-300 to-violet-500 bg-clip-text text-3xl font-semibold text-transparent mb-6'
              variants={itemVariants}
            >
              Aspiring Web Developer
            </motion.h2>
            
            <motion.p 
              className='text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-start'
              variants={itemVariants}
            >
              I'm a Computer Science graduate passionate about creating beautiful, user-friendly web experiences. 
              With a strong foundation in MVC architecture, ReactJS, JavaScript, and UI/UX principles, I build interfaces that function seamlessly across all devices.
              As a recent graduate, I'm eager to grow across the full stack web development while currently focusing on frontend development. 
              I have experience with both frontend and backend technologies including Node.js and Express.js. 
              I bring fresh perspectives, strong problem-solving skills, and enthusiasm for learning to every project.
            </motion.p>
            
            <motion.div 
              className='flex flex-wrap gap-4 mb-8 justify-center lg:justify-start'
              variants={itemVariants}
            >
              <motion.a 
                href="https://www.canva.com/design/DAGY42H07Tg/hgU1RlZ5WS0EBSiF3gBhkA/view"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
              <motion.a 
                href="#projects" 
                className='bg-transparent hover:bg-gray-800 text-white border border-gray-600 px-6 py-3 rounded-full transition-all duration-300 font-medium'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className='flex gap-5 pl-2 justify-center lg:justify-start'
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
            className='flex justify-center'
            variants={imageVariants}
          >
            <div className='relative max-w-md w-full'>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur p-1'></div>
              <motion.img
                src={ProfilePic}
                alt="Rouen Padilla"
                className='relative rounded-2xl w-full h-full object-cover'
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