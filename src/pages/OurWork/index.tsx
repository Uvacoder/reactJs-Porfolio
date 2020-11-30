import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  fade,
  LineAnimation,
  pageAnimation,
  photoAnimation,
  slider,
  // eslint-disable-next-line prettier/prettier
  sliderContainer
} from '../../animation';
import { Hide } from '../../components/AboutSection/styles';
import ScrollTop from '../../components/ScrollTop';
import { UseScroll } from '../../components/UseScroll';
import athlete from '../../img/athlete-small.png';
import goodtimes from '../../img/goodtimes-small.png';
import theracer from '../../img/theracer-small.png';
import { Frame1, Frame2, Frame3, Frame4, Movie, Work } from './styles';

const OurWork: React.FC = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={LineAnimation} className="line" />
        <Link to="/movie/creed">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="athelete"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} initial="hidden" animate={controls}>
        <h2>The Racer</h2>
        <motion.div variants={LineAnimation} className="line" />
        <Link to="/movie/creed">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        initial="hidden"
        animate={controls2}
      >
        <h2>Good Times</h2>
        <motion.div variants={LineAnimation} className="line" />
        <Link to="/movie/creed">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

export default OurWork;
