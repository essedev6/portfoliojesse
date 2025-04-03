import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiUser } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiBriefcase />, value: '10+', label: 'Projects Completed' },
    { icon: <FiUser />, value: '10+', label: 'Happy Clients' },
    { icon: <FiAward />, value: '2+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey and what drives me in this creative
            field.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="About Me"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white">
                  Passionate About Creating Digital Experiences
                </h3>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-emerald-500 rounded-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">
              Who <span className="text-emerald-500">am I?</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate designer and developer with over 2 years of
              experience creating digital experiences that matter. My approach
              combines technical expertise with creative vision to deliver
              solutions that are both beautiful and functional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl text-emerald-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-1">{stat.value}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-900 to-emerald-600 text-white rounded-lg font-medium shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;