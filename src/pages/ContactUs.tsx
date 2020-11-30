import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../animation';

// import { Container } from './styles';

const ContactUs: React.FC = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
