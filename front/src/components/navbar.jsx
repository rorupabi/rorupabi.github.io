import { useState, useEffect, useRef } from 'react';
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
      // Close menu if click is outside menu AND outside the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <>
      <nav className="flex items-center justify-between py-8 top-5 sm:top-2 md:top-4 bg-black/10 px-4 lg:px-8 md:px-8">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <p className="font-semibold text-xl mr-8">Padilla's Portfolio</p>
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center gap-3 text-2xl">
          <ul>
            <li className="flex justify-between gap-6 scroll-smooth">
              <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-gray-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-gray-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            ref={buttonRef}
            className="text-white hover:text-gray-300 text-3xl p-2 duration-300 "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-[74px] left-0 right-0 bg-black/90 z-30 py-4">
          <ul className="flex flex-col items-center space-y-4 text-xl">
            <li><a href="#about" onClick={toggleMenu} className="hover:text-gray-400 transition-colors">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="hover:text-gray-400 transition-colors">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-gray-400 transition-colors">Projects</a></li>
            <li><a href="#education" onClick={toggleMenu} className="hover:text-gray-400 transition-colors">Education</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-gray-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;