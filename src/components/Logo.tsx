import React from 'react';
import logo from '../assets/images/logo.png';
import { Image } from './styles/Image.styles';

const Logo = () => (
  <div>
    <Image src={logo} alt="logo" height="150px" />
  </div>
);

export default Logo;
