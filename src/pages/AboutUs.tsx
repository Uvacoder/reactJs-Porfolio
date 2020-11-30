import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../animation';
import AboutSecion from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs: React.FC = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSecion />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
