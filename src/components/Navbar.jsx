import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../App.css';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="#home"
            className="text-xl font-bold text-white"
          >
            FolioBox
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-white/80 hover:text-white transition-colors"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? (
                  <FiSun size={20} />
                ) : (
                  <FiMoon size={20} />
                )}
              </motion.button>

              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/essedev6/portfoliojesse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>

              {/* CTA Button — pill shape matching screenshot */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100"
              >
                Get in touch
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-gray-900/95 z-40 md:hidden pt-20 px-6"
          >
            <nav className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-6">
              <a
                href="https://github.com/essedev6/portfoliojesse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-nyangao-927428242/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>

            <button
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;