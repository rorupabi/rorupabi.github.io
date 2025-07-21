import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 180 }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between py-8 top-0 sm:top-2 md:top-4 lg:px-8 md:px-8"
      >
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <motion.p 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold text-xl mr-8 hover:text-gray-500 transition-colors duration-300"
            >
              Rouen's Portfolio
            </motion.p>
          </a>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex items-center justify-center gap-3 text-2xl"
        >
          <ul>
            <li className="flex justify-between gap-6 scroll-smooth">
              <motion.a 
                href="#about" 
                whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About
              </motion.a>
              <motion.a 
                href="#skills" 
                whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Skills
              </motion.a>
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Projects
              </motion.a>
              <motion.a 
                href="#experience" 
                whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Experience
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </motion.div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            ref={buttonRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white cursor-pointer hover:text-gray-500 text-3xl p-2 duration-300"
            aria-label="Toggle menu"
          >
            <motion.div
              variants={iconVariants}
              animate={isMenuOpen ? "visible" : "hidden"}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-18 left-0 right-0 bg-black/90 backdrop-blur-md z-50 py-10"
          >
            <motion.ul className="flex flex-col items-center space-y-4 text-xl">
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#about" 
                  onClick={toggleMenu} 
                  whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  About
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#skills" 
                  onClick={toggleMenu} 
                  whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  Skills
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#projects" 
                  onClick={toggleMenu} 
                  whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  Projects
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#education" 
                  onClick={toggleMenu} 
                  whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  Education
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#contact" 
                  onClick={toggleMenu} 
                  whileHover={{ scale: 1.1, color: "#9CA3AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  Contact
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;