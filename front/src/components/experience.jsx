import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from "../constants/works.jsx";

const Experience = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experienceItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const techItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section id='experience' className='duration-300'>
      <div className='pb-4'>
        <motion.h2 
          className='my-20 text-center text-4xl text-stone-200'
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index} 
              className="mb-8 flex flex-wrap lg:justify-center"
              variants={experienceItemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-full lg:w-1/4">
                <motion.p 
                  className="mb-2 text-lg font-medium text-start text-stone-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {experience.year}
                </motion.p>
              </div>
              
              <div className="w-full max-w-xl lg:w-3/4">
                <motion.h3 
                  className="mb-2 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {experience.role} -{" "}
                  <span className="text-md text-stone-500">
                    {experience.company || ""}
                  </span>
                </motion.h3>
                
                <motion.p 
                  className="mb-4 text-stone-400 text-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {experience.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap"
                  variants={techStackVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {experience.technologies && experience.technologies.map((tech, techIndex) => (
                    <motion.span 
                      className="mr-2 mb-2 rounded bg-slate-800 px-2 py-1 text-sm font-medium text-stone-300" 
                      key={techIndex}
                      variants={techItemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#475569",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;