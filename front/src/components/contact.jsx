import React from 'react';
import { CONTACT } from '../constants/works.jsx';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl">
        <div className="bg-slate-900/40 border border-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-purple-900/20 hover:border-purple-900/30">
          
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-slate-900 to-purple-900/30 px-6 py-8 text-center">
            <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
            <div className="h-1 w-16 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Contact content */}
          <div className="p-12">
            {/* Contact info section */}
            <div className="flex flex-col items-center space-y-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-lg">{CONTACT.address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`} className="text-lg hover:text-purple-400 transition-colors">
                  {CONTACT.phoneNo}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${CONTACT.email}`} className="text-lg hover:text-purple-400 transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div className="border-t border-slate-800 py-4">
            <div className="flex gap-6 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;