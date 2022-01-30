import React, { FC } from 'react';
import Logo from './Logo';
import { StyledHeader } from './styles/Header.styles';

type HeaderProps = {}

const Header:FC<HeaderProps> = ({ children }) => (
  <StyledHeader>
    <Logo />
    {children}
  </StyledHeader>
);

export default Header;
