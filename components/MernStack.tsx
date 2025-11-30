import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, Server, Database, Code, Layout, GitBranch, Cpu } from 'lucide-react';

const MernStack: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: Palette },
    { name: 'JavaScript', icon: Code },
    { name: 'React.js', icon: Cpu },
    { name: 'Node.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'UI/UX Design', icon: Layout },
  ];

  const MotionH2 = motion.h2 as any;
  const MotionDiv = motion.div as any;

  return (
    <section className="py-24 relative overflow-hidden bg-black text-white">
      {/* Dark stylized background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,212,255,0.1)_0%,_transparent_50%),_radial-gradient(circle_at_80%_20%,_rgba(123,97,255,0.1)_0%,_transparent_50%)] z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-neon to-accent-electric inline-block"
          >
            MERN Stack Mastery
          </MotionH2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineering digital excellence from concept to deployment.
          </p>
        </div>

        {/* Highlight Card */}
        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-neon to-accent-electric"></div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-neon to-accent-electric flex items-center justify-center shrink-0">
              <Rocket className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Full-Stack Digital Architecture</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                As a MERN Stack Developer, I unite the power of modern front-end creativity with back-end intelligence — crafting seamless, data-driven web applications that perform flawlessly across devices. My focus is on building products that are not only visually striking but technologically superior.
              </p>
            </div>
          </div>
        </MotionDiv>

        {/* Two Column details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-neon to-accent-electric"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-neon/20 rounded-lg">
                <Palette className="text-accent-neon w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Frontend Development</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I craft visually stunning, responsive, and intuitive interfaces that merge design precision with cutting-edge performance. Every pixel and interaction is engineered to deliver seamless digital elegance.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-electric to-accent-neon"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-electric/20 rounded-lg">
                <Server className="text-accent-electric w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Backend Development</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Behind every smooth interface, I architect intelligent, secure, and scalable backend systems built for the future. Using Node.js, Express, and MongoDB, I design digital infrastructures that power speed and reliability.
            </p>
          </MotionDiv>
        </div>

        {/* Skills Grid */}
        <h3 className="text-2xl font-bold text-center text-accent-gold mb-8">Core Skills & Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <MotionDiv
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-accent-neon transition-all cursor-default"
            >
              <skill.icon className="w-8 h-8 text-accent-neon" />
              <span className="font-medium text-sm md:text-base text-gray-200">{skill.name}</span>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MernStack;