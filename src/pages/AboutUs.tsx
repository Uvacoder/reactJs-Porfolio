import React from 'react';
import AboutSecion from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

// import { Container } from './styles';

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutSecion />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
