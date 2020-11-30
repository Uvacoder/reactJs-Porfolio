import React from 'react';
import { AwardStyle } from './styles';

interface AwardProps {
  title: string;
  description: string;
}

const Award: React.FC<AwardProps> = ({ description, title }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line" />
      <p>{description}</p>
    </AwardStyle>
  );
};

export default Award;
