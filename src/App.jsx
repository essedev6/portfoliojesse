import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/Projects';
import ServicesPage from './pages/Services';
import { motion} from 'framer-motion';
import Navbar from './components/Navbar';


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
    
     
      <div className="dark:bg-gradient-to-r dark:from-[#866E55] dark:to-[#E7CEAF] dark:text-gray-100 bg-white text-gray-900 min-h-screen">
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-[#1A1719] z-50">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="w-24 h-24 bg-gradient-to-r from-[#2c1f28] to-[#bd875e] rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">P | J</span>
            </motion.div>
          </div>
        ) : (
       <>
  <Navbar
    darkMode={darkMode}
    toggleTheme={toggleTheme}
  />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>

  <Footer />
  <ScrollToTop />
</>
        )}
      </div>
    
  );
}

export default App;