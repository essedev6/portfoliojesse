import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt, FaBullhorn } from 'react-icons/fa';

const skills = [
  { name: 'UI/UX Design', percentage: 85, color: 'bg-gradient-to-r from-indigo-500 to-emerald-500', icon: <FaPaintBrush className="text-indigo-500 w-8 h-8" /> },
  { name: 'Web Development', percentage: 90, color: 'bg-gradient-to-r from-indigo-600 to-emerald-400', icon: <FaCode className="text-indigo-600 w-8 h-8" /> },
  { name: 'Mobile Design', percentage: 80, color: 'bg-gradient-to-r from-indigo-700 to-emerald-300', icon: <FaMobileAlt className="text-indigo-700 w-8 h-8" /> },
  { name: 'Branding', percentage: 75, color: 'bg-gradient-to-r from-indigo-800 to-emerald-200', icon: <FaBullhorn className="text-indigo-800 w-8 h-8" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A combination of creativity, technical knowledge, and problem-solving expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center transform hover:scale-105"
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                <div
                  style={{ width: `${skill.percentage}%` }}
                  className={`${skill.color} h-full rounded-full`}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
