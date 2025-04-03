import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Jesse Nyangao. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="/" className="hover:text-emerald-500"><FiFacebook className="w-6 h-6" /></a>
          <a href="/" className="hover:text-emerald-500"><FiTwitter className="w-6 h-6" /></a>
          <a href="/" className="hover:text-emerald-500"><FiInstagram className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/jesse-nyangao-927428242/" className="hover:text-emerald-500"><FiLinkedin className="w-6 h-6" /></a>
        </div>
        <div className="mt-4">
          <a href="/" className="text-sm hover:text-emerald-500">Privacy Policy</a> | 
          <a href="/" className="text-sm hover:text-emerald-500"> Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
