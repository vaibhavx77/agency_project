import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[100vh] bg-neutral-900 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Transform Your Vision <br />
            <span className="text-[#E0A458]">Into Digital Reality</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Crafting exceptional digital experiences that elevate your brand and drive results.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-[#E0A458] text-white px-8 py-3 rounded-md">
              Get Started
            </a>
            <a href="#" className="ml-4 border border-[#E0A458] text-[#E0A458] px-8 py-3 rounded-md">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;