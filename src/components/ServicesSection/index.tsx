import React from 'react';
import { scrollReveal } from '../../animation';
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import home2 from '../../img/home2.png';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import { Description, Image } from '../../styles/pageLayout';
import { UseScroll } from '../UseScroll';
import { Card, Cards, Services } from './styles';

const ServicesSection: React.FC = () => {
  const [element, controls] = UseScroll();
  return (
    <Services
      ref={element}
      initial="hidden"
      variants={scrollReveal}
      animate={controls}
    >
      <Description>
        <h2>
          High
          <span> quality </span>
          services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

export default ServicesSection;
