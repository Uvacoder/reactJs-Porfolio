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
import athlete from '../../img/athlete-small.png';
import goodtimes from '../../img/goodtimes-small.png';
import theracer from '../../img/theracer-small.png';
import { Frame1, Frame2, Frame3, Frame4, Movie, Work } from './styles';

const OurWork: React.FC = () => {
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
      <Movie>
        <h2>The Racer</h2>
        <div className="line" />
        <Link to="/movie/creed">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line" />
        <Link to="/movie/creed">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
