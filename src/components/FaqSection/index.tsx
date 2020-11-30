import React from 'react';
import { Faq } from './styles';

const FaqSection: React.FC = () => {
  return (
    <Faq>
      <h2>
        Any Questions
        <span> FAQ </span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere iure autem ut unde illo delectus magni molestias? Laborum
            iste quasi similique accusantium doloremque corporis assumenda
            maxime dignissimos tenetur velit?
          </p>
        </div>
        <div className="faq-line" />
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere iure autem ut unde illo delectus magni molestias? Laborum
            iste quasi similique accusantium doloremque corporis assumenda
            maxime dignissimos tenetur velit?
          </p>
        </div>
        <div className="faq-line" />
      </div>

      <div className="question">
        <h4>What do you support</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere iure autem ut unde illo delectus magni molestias? Laborum
            iste quasi similique accusantium doloremque corporis assumenda
            maxime dignissimos tenetur velit?
          </p>
        </div>
        <div className="faq-line" />
      </div>
    </Faq>
  );
};

export default FaqSection;
