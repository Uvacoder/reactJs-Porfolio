import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Details = styled(motion.div)`
  color: white;
`;

export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`;

export const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
