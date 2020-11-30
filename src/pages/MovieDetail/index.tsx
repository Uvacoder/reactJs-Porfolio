import React from 'react';
import Award from '../../components/Award';
import athlete from '../../img/athlete-small.png';
import athlete2 from '../../img/athlete2.png';
import { Awards, Details, HeadLine, ImageDisplay } from './styles';

const MovieDetail: React.FC = () => {
  return (
    <Details>
      <HeadLine>
        <h2>CREED</h2>
        <img src={athlete} alt="" />
      </HeadLine>
      <Awards>
        <Award
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, id et expedita magnam ab totam?"
        />
        <Award
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti ipsam, quo est eos architecto."
        />
        <Award
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam officiis dolorem quis illum."
        />
      </Awards>
      <ImageDisplay>
        <img src={athlete2} alt="" />
      </ImageDisplay>
    </Details>
  );
};

export default MovieDetail;
