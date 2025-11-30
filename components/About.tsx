import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const MotionH2 = motion.h2 as any;
  const MotionDiv = motion.div as any;

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-neon to-accent-electric inline-block"
          >
            About Me
          </MotionH2>
          <MotionDiv 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-accent-neon mx-auto rounded-full mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate frontend engineer crafting seamless digital experiences with precision, creativity, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-accent-gold dark:text-amber-400 mb-4">Objective</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Motivated and self-driven Computer Science student with a strong foundation in front-end development and a growing passion for modern web technologies. Eager to apply technical skills to real-world projects, collaborate in dynamic teams, and continuously expand expertise through hands-on innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-gold dark:text-amber-400 mb-6">Education</h3>
              <div className="space-y-6 relative border-l-2 border-gray-200 dark:border-white/10 ml-3 pl-8">
                {EDUCATION_DATA.map((item) => (
                  <div key={item.id} className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-zinc-900 bg-accent-electric"></span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.institution}</p>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-bold shadow-lg hover:bg-accent-electric dark:hover:bg-gray-200 transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/id/1005/600/800" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-10 -right-6 -z-10 w-full h-full rounded-2xl border-2 border-accent-neon opacity-50"></div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default About;