import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-emerald-500">Jesse Nyangao</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
              Full-Stack Developer & UI Designer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I craft beautiful, responsive websites and applications with modern
              technologies. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-900 to-emerald-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/20 transition-all"
              >
                <span>Hire Me</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/My Resume Jesse Nyangao.pdf"
                download
                className="px-8 py-3 border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-emerald-500/10 transition-colors"
              >
                <span>Download CV</span>
                <FiDownload className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-900 to-emerald-500 blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-900 to-emerald-500 animate-spin-slow"></div>
              <div className="absolute inset-8 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="assets/Profile Pic Jesse.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-indigo-500/20 blur-xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-500/20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;