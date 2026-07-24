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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    
  ];

  // Glassmorphism base classes — no backdrop color, just blur + border
  const glassBaseLogo = 'bg-transparent shadow-lg';
  const glassBase = 'bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg';
  const glassScrolled = 'bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl';

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo — distinct glass pill */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="/"
            className={`rounded-[2rem] px-5 py-2.5 text-2xl font-bold font-bauhaus text-white transition-all duration-500 ${
              scrolled ? glassScrolled : glassBaseLogo
            }`}
          >
            essedev
          </motion.a>

          {/* Desktop Nav — center links in distinct glass pill */}
          <div className="hidden md:flex items-center ml-auto">
            <nav
              className={`rounded-full px-6 py-2.5 transition-all duration-500 ${
                scrolled ? glassScrolled : glassBase
              }`}
            >
              <ul className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right side — CTA + icons in distinct glass pill */}
          <div className="hidden md:flex items-center space-x-3 ml-2">
            <div
              className={`flex items-center space-x-3 rounded-full px-4 py-2 transition-all duration-500 ${
                scrolled ? glassScrolled : glassBase
              }`}
            >
              {/* Theme toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-white/70 hover:text-white transition-colors"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/essedev6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaGithub className="w-[18px] h-[18px]" />
              </motion.a>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
            className="fixed inset-0 bg-[#1A1719E6] z-40 md:hidden pt-20 px-6"
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

            {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="flex items-center justify-center mt-64 gap-2 rounded-full bg-white px-4 py-3 text-xl font-semibold text-gray-900 transition-all hover:bg-gray-100"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>

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