import React from 'react';
import { Link } from 'react-router-dom';
import athlete from '../../img/athlete-small.png';
import goodtimes from '../../img/goodtimes-small.png';
import theracer from '../../img/theracer-small.png';
import { Movie, Work } from './styles';

const OurWork: React.FC = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line" />
        <Link to="/">
          <img src={athlete} alt="athelete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line" />
        <Link to="/">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line" />
        <Link to="/">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
