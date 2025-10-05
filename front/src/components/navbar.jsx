import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { RiLinkedinBoxFill, RiGithubFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { scrollY } = useScroll();

  // Detect scroll for navbar background
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Track active section with better detection
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      // Special case: if at the very top, always show About as active
      if (window.scrollY < 100) {
        setActiveSection('about');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - 80; // Offset for navbar height
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1); // Remove the '#'
    smoothScrollTo(targetId);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 ${
          isScrolled ? 'backdrop-blur-xl shadow-lg border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
            aria-label="Home"
          >
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Rorupabi
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group text-gray-300 font-medium text-sm tracking-wide"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-lg bg-white/5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            
            {/* Social Icons */}
            <div className="flex gap-3 ml-4 pl-4 border-l border-white/10">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <RiLinkedinBoxFill size={22} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <RiGithubFill size={22} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            ref={buttonRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative z-50 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? (
                <RiCloseLine className="text-2xl text-white" />
              ) : (
                <RiMenu3Line className="text-2xl text-gray-300" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu */}
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-20 left-4 right-4 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 md:hidden overflow-hidden"
            >
              <div className="p-6">
                <motion.ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li key={link.href} variants={itemVariants}>
                      <motion.a
                        href={link.href}
                        onClick={(e) => {
                          handleNavClick(e, link.href);
                          toggleMenu();
                        }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          activeSection === link.href.slice(1)
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <motion.span
                            className={`w-1.5 h-1.5 rounded-full ${
                              activeSection === link.href.slice(1)
                                ? 'bg-purple-400'
                                : 'bg-gray-500'
                            }`}
                            animate={activeSection === link.href.slice(1) ? {
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {link.label}
                        </span>
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-4 mt-6 pt-6 border-t border-white/10 justify-center"
                >
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all"
                  >
                    <RiLinkedinBoxFill size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all"
                  >
                    <RiGithubFill size={24} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;