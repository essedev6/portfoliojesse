import { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css'

function App() {
   const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme class to document root and save preference
  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    
     
      <div className="dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900 min-h-screen">
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="w-24 h-24 bg-gradient-to-r from-indigo-900 to-emerald-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">P | J</span>
            </motion.div>
          </div>
        ) : (
          <>
             <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </div>
    
  );
}

export default App;