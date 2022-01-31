import React, { FC } from 'react';
import Logo from './Logo';
import { StyledHeader } from './styles/Header.styles';

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;
