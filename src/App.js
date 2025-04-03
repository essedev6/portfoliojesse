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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
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
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
    </div>
  );
}

export default App;