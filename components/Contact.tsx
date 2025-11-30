import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../constants';
import { Download } from 'lucide-react';

const Contact: React.FC = () => {
  const MotionH2 = motion.h2 as any;
  const MotionDiv = motion.div as any;

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Begin Our Collaboration
          </MotionH2>
          <div className="h-1 w-20 bg-accent-neon mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital vision into reality? Let's connect and discuss how we can create something extraordinary together.
          </p>
        </div>

        {/* Contact Info Summary (Mobile friendly text) */}
        <div className="max-w-2xl mx-auto text-center mb-12 p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
           <p className="mb-2 text-slate-900 dark:text-white"><strong>Name:</strong> Muhammad Bin Naveed</p>
           <p className="mb-2 text-slate-900 dark:text-white"><strong>Location:</strong> Ali View Garden, Nadrabad, Lahore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTACT_DATA.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black p-8 rounded-2xl text-center border border-gray-200 dark:border-white/10 hover:border-accent-neon hover:-translate-y-2 transition-all shadow-md group"
            >
              <div className="w-12 h-12 mx-auto bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-neon/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent-electric dark:text-accent-neon" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-6 truncate px-2" title={item.value}>{item.value}</p>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-gray-300 dark:border-white/20 rounded-full text-sm font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                {item.action}
              </a>
            </MotionDiv>
          ))}
        </div>
        
        <div className="text-center">
          <a 
             href="#"
             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-neon to-accent-electric text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
             <Download size={20} />
             View My CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;