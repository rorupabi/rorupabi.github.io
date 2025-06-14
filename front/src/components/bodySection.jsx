import React from 'react'
import ProfilePic from '../assets/profilepic.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const BodySection = () => {
  return (
    <section id='hero' className='min-h-screen flex items-center'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div className='flex flex-col justify-center text-center lg:text-left'>
            <p className='text-indigo-400 font-medium'>Hello, I'm</p>
            <h1 className='text-6xl font-bold mb-2 text-white'>
              Rouen Padilla
            </h1>
            <h2 className='bg-gradient-to-r from-indigo-300 to-violet-500 bg-clip-text text-3xl font-semibold text-transparent mb-6'>
              Aspiring Web Developer
            </h2>
            
            <p className='text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-start'>
            I'm a Computer Science graduate passionate about creating beautiful, user-friendly web experiences. 
            With a strong foundation in ReactJS, JavaScript, and responsive design, I build interfaces that function seamlessly across all devices.
            As a recent graduate, I'm eager to grow across the full stack web development while currently focusing on frontend development. 
            I have experience with both frontend and backend technologies including JavaScript (Node.js) and Java. 
            I bring fresh perspectives, strong problem-solving skills, and enthusiasm for learning to every project.
            </p>
            
            <div className='flex flex-wrap gap-4 mb-8 justify-center lg:justify-start'>
              <a 
                href="https://www.canva.com/design/DAGY42H07Tg/hgU1RlZ5WS0EBSiF3gBhkA/view"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium'
              >
                View Resume
              </a>
              <a 
                href="#projects" 
                className='bg-transparent hover:bg-gray-800 text-white border border-gray-600 px-6 py-3 rounded-full transition-all duration-300 font-medium'
              >
                View Projects
              </a>
            </div>
            
            <div className='flex gap-5 pl-2 justify-center lg:justify-start'>
              <a href="https://github.com/rorupabi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rouen-padilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="mailto:rouenpads@gmail.com" alt="rouenpads@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className='flex justify-center'>
            <div className='relative max-w-md w-full'>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur p-1'></div>
              <img
                src={ProfilePic}
                alt="Rouen Padilla"
                className='relative rounded-2xl w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodySection