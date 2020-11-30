import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #fff;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  color: #fff;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
