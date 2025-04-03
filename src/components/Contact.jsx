import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      };

      // For production (Vercel) and local development with Next.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      const result = await response.json();
      setSubmitStatus({
        success: true,
        message: result.message || 'Message sent successfully!'
      });
      e.target.reset();

    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 
          `Failed to send message. Please email me directly at jessenyangaob@gmail.com`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Jesse Nyangao"
                    required
                    minLength={2}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="jessenyangaob@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell me about your project..."
                  required
                  minLength={10}
                ></textarea>
              </div>
              
              {submitStatus.message && (
                <div className={`p-3 rounded-lg ${submitStatus.success 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {submitStatus.message}
                  {!submitStatus.success && (
                    <div className="mt-2">
                      <a 
                        href="mailto:jessenyangaob@gmail.com" 
                        className="text-emerald-600 dark:text-emerald-400 underline"
                      >
                        Click here to email me directly
                      </a>
                    </div>
                  )}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-900 to-emerald-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/20 transition-all disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FiSend className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FiMail className="w-6 h-6 text-emerald-500" />
              <a
                href="mailto:jessenyangaob@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
              >
                jessenyangaob@gmail.com
              </a>
            </div>

            <div className="flex items-start space-x-4">
              <FiPhone className="w-6 h-6 text-emerald-500 mt-1" />
              <div className="flex flex-col space-y-3">
                <a
                  href="tel:+254757597007"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>+254 757 597007</span>
                </a>

                <a
                  href="sms:+254757597007"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <span className="w-5 h-5">💬</span>
                  <span>Send SMS</span>
                </a>

                <a
                  href="https://wa.me/254757597007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FiMapPin className="w-6 h-6 text-emerald-500" />
              <span className="text-gray-700 dark:text-gray-300">Kisumu, Nairobi</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

