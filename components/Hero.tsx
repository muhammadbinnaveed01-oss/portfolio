import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-gradient-to-br from-accent-electric to-accent-neon"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
              Muhammad <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-neon to-accent-electric">
                bin Naveed
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-normal">
              Elite Frontend Developer & Digital Visionary
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              <span className="text-accent-gold dark:text-amber-400 font-semibold block mb-2">INTRODUCTION</span>
              Transforming complex ideas into pixel-perfect, high-performance digital realities. I craft modern, responsive, and intelligent web experiences that bridge innovation with design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-accent-neon to-accent-electric text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                View Portfolio
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-gray-300 dark:border-white/20 hover:border-accent-electric dark:hover:border-accent-neon text-slate-900 dark:text-white font-semibold hover:-translate-y-1 transition-all duration-300"
              >
                Begin Collaboration
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group perspective-1000">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-0 rotate-y-6">
               <img
  src="./Public/image/muhamad-bin-naveed.jpg"
  alt="Muhammad bin Naveed"
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent-neon/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-electric/20 rounded-full blur-2xl"></div>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default Hero;