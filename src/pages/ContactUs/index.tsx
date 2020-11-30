import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation, titleAnimation } from '../../animation';
import { Hide } from '../../components/AboutSection/styles';
import ScrollTop from '../../components/ScrollTop';
import { Circle, ContactStyle, SocialLinks, Title } from './styles';

// import { Container } from './styles';

const ContactUs: React.FC = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <SocialLinks variants={titleAnimation}>
            <Circle />
            <h2>Send Us a Message</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnimation}>
            <Circle />
            <h2>Send an email.</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnimation}>
            <Circle />
            <h2>Social Media</h2>
          </SocialLinks>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
