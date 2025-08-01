import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sanchit-raizada/sanchit-raizada', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sanchit_raizada@hotmail.com?subject=GitHub%20Connection', label: 'Email' }
  ];

  return (
    <footer id="contact" className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <IconComponent 
                  size={20} 
                  className="text-white dark:text-black" 
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by <span className="font-medium text-black dark:text-white">Sanchit Saxena</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}