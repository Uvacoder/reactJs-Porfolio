/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ToggleProps {
  title: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, title }) => {
  const [toggleQuestion, setToggleQuestion] = useState(true);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <motion.div
      layout
      className="question"
      onClick={() => setToggleQuestion(!toggleQuestion)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggleQuestion ? children : ''}
      <div className="faq-line" />
    </motion.div>
  );
};

export default Toggle;
