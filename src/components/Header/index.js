import React from 'react';

import SearchBar from '../SearchBar';
import Units from '../Units';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <br />
    <Units />
  </StyledHeader>
);

export default Header;
