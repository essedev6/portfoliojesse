import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiClock, FiCheckCircle } from 'react-icons/fi';

const projects = [
  {
    title: 'Client-Captive Portal (Billing System)',
    description: 'A High Speed Captive portal, customizable for any billing system for efficiency and Security in online transactions, involving STK Prompt on users device.',
    image: '/assets/adkims2.png',
    tags: ['Next.js', 'Daraja API', 'MongoDB'],
    github: 'https://github.com/essedev6/wahala2',
    live: 'https://adkims-captive-portal.vercel.app/',
    status: 'live'
  },
  {
    title: 'Movie Streaming Platform',
    description: 'A modern Movie streaming experience with seamless navigation and no Ads.',
    image: '/assets/WahalaPic.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/essedev6/wahala2',
    live: 'https://wahala2.vercel.app/',
    status: 'live'
  },
  {
    title: 'Survey Website',
    description: 'A sleek Maternal Survey site for hospitals and researchers.',
    image: '/assets/survey.png',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/essedev6/Maternal-survey',
    live: 'https://maternal-survey.vercel.app/',
    status: 'live'
  },
  {
    title: 'ADKIMS BILLING SYSTEM (Admin Dashboard)',
    description: 'Hotspot Billing System admin dashboard for managing users connected at open public or private wifi networks.',
    image: '/assets/admin3.png',
    tags: ['Next.js', 'Daraja API', 'MongoDB'],
    github: '#',
    live: '#',
    status: 'soon'
  },
  {
    title: 'Smart Mobility Commerce Platform',
    description: 'E-commerce platform that combines ride-hailing and car booking into a single, seamless web experience. Built with a focus on usability, secure payments, real-time availability, and scalable architecture, enabling users to book rides, reserve vehicles, and manage transactions efficiently.',
    image: '/assets/fiika.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
    status: 'soon'
  },
  {
    title: 'Data Management System',
    description: 'A smart hotspot tool that quietly keeps laptops from wasting data by stopping heavy background internet usage, helping users stay online longer without burning through their bundles.',
    image: '/assets/hg.png',
    tags: ['React', 'Firebase', 'Material UI'],
    github: '#',
    live: '#',
    status: 'soon'
  },
];

const Portfolio = () => {
  const liveProjects = projects.filter(project => project.status === 'live');
  const upcomingProjects = projects.filter(project => project.status === 'soon');

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
            Portfolio Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated collection of my work, showcasing both completed projects and upcoming innovations.
          </p>
        </motion.div>

        {/* Live Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <FiCheckCircle className="w-6 h-6 text-emerald-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Live Projects
              </h3>
              <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                {liveProjects.length} Completed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {liveProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold bg-emerald-500 text-white rounded-full flex items-center space-x-1">
                    <FiCheckCircle className="w-3 h-3" />
                    <span>Live Demo</span>
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Tags Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <FiClock className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Coming Soon
              </h3>
              <span className="px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">
                {upcomingProjects.length} In Progress
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
              >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-gray-900/95 to-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <FiClock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Coming Soon</h4>
                    <p className="text-gray-300">This project is currently in development</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold bg-amber-500 text-white rounded-full flex items-center space-x-1">
                    <FiClock className="w-3 h-3" />
                    <span>In Progress</span>
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 to-gray-600/30 dark:from-gray-700/30 dark:to-gray-900/30" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Disabled Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                      disabled
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button
                      disabled
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                    >
                      <FiClock className="w-4 h-4" />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;