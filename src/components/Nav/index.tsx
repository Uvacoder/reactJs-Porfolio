import React from 'react';
import { StyledNav } from './styles';

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="/"> 1. About Us</a>
        </li>
        <li>
          <a href="/"> 2. Our Work</a>
        </li>
        <li>
          <a href="/"> 3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
