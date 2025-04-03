
import { motion } from 'framer-motion';
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiSearch,
  FiPieChart,
  FiPenTool,
} from 'react-icons/fi';

const services = [
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and beautiful interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: <FiCode />,
    title: 'Web Development',
    description:
      'Building responsive, fast, and secure websites with modern technologies.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Design',
    description:
      'Designing mobile experiences that are both functional and delightful to use.',
  },
  {
    icon: <FiSearch />,
    title: 'SEO Optimization',
    description:
      'Improving your site\'s visibility and ranking on search engines.',
  },
  {
    icon: <FiPieChart />,
    title: 'Digital Marketing',
    description:
      'Strategies to grow your online presence and reach your target audience.',
  },
  {
    icon: <FiPenTool />,
    title: 'Brand Identity',
    description:
      'Crafting memorable brand identities that tell your unique story.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's how I can help bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-6 text-emerald-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;