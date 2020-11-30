import React from 'react';
import home1 from '../img/home1.png';

// import { Container } from './styles';

const AboutSecion: React.FC = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make </h2>
          </div>
          <div className="hide">
            <h2>
              your
              <span> dreams </span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true. </h2>
          </div>
        </div>

        <p>
          Contact us for any photograpy or videography ideas that you have. We
          have professional with amazing skills
        </p>
        <button type="button"> Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="guy with camera" />
      </div>
    </div>
  );
};

export default AboutSecion;
