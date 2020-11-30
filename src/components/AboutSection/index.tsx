import { motion } from 'framer-motion';
import React from 'react';
import { fade, photoAnimation, titleAnimation } from '../../animation';
import home1 from '../../img/home1.png';
import { Description, Image, Layout } from '../../styles/pageLayout';
import Wave from '../Wave';
import { Hide } from './styles';

const AboutSecion: React.FC = () => {
  return (
    <Layout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your
              <span> dreams </span>
              come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}> true. </motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photograpy or videography ideas that you have. We
          have professional with amazing skills
        </motion.p>
        <motion.button variants={fade} type="button">
          Contact Us
        </motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with camera"
        />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSecion;
