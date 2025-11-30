import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Muhammad bin Naveed</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Elite Frontend Developer & Digital Visionary</p>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-accent-electric hover:text-white dark:hover:bg-accent-neon dark:hover:text-black transition-all"
                aria-label={link.platform}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Muhammad bin Naveed. All Rights Reserved. Crafted with Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;