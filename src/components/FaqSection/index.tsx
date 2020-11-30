import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import Toggle from '../Toggle';
import { Faq } from './styles';

const FaqSection: React.FC = () => {
  return (
    <Faq>
      <h2>
        Any Questions
        <span> FAQ </span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facere iure autem ut unde illo delectus magni molestias? Laborum
              iste quasi similique accusantium doloremque corporis assumenda
              maxime dignissimos tenetur velit?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facere iure autem ut unde illo delectus magni molestias? Laborum
              iste quasi similique accusantium doloremque corporis assumenda
              maxime dignissimos tenetur velit?
            </p>
          </div>
        </Toggle>

        <Toggle title="What do we offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facere iure autem ut unde illo delectus magni molestias? Laborum
              iste quasi similique accusantium doloremque corporis assumenda
              maxime dignissimos tenetur velit?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
