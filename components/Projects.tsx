import React from 'react';

import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const MotionH2 = motion.h2 as any;
  const MotionDiv = motion.div as any;

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Signature Projects
          </MotionH2>
          <div className="h-1 w-20 bg-accent-electric mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A curated selection of premium digital experiences that demonstrate technical excellence and design innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-electric transition-colors group shadow-lg hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-electric dark:text-accent-neon font-semibold text-sm hover:gap-3 transition-all"
                >
                  {project.linkText} <ExternalLink size={16} />
                </a>
              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;