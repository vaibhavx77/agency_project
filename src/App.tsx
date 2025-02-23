
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Scheduler from './components/Scheduler';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';


const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const schedulerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);







  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <motion.section 
        id="home"
        ref={homeRef}
        className="min-h-screen"
        initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}>
      <Hero />
      </motion.section>
      <motion.section id="services" ref={servicesRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
      <Services />
      </motion.section>
      <motion.section id="about" ref={aboutRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <About />
      </motion.section>
      <motion.section id="portfolio" ref={portfolioRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <Portfolio />
      </motion.section>
      <motion.section id="process" ref={processRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <Process />
      </motion.section>
      <motion.section id="testimonials" ref={testimonialsRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.section>
      <motion.section id="scheduler" ref={schedulerRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <Scheduler />
      </motion.section>
      <motion.section id="contact" ref={contactRef} className="min-h-screen"
      initial={{ x: -100, opacity: 0 }} // Start 100px to the left and invisible
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
      <Footer />
      {/* <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Agency</h2>
          <p className="text-gray-300">We transform your vision into digital reality.</p>
        </section>
      </main> */}
    </div>
  );
};

export default App;