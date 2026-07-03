import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 relative overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <p className="text-gray-400 mb-2">
          Designed & Built with <span className="text-red-500">❤</span> by Elias Kemal
        </p>
        <p className="text-gray-500 text-sm">
          © {currentYear} Elias Kemal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
