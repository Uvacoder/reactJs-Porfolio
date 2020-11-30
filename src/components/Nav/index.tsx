import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Line, StyledNav } from './styles';

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> 1. About Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/work"> 2. Our Work</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contact"> 3. Contact Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
