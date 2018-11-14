import React from 'react';

import SearchBar from '../SearchBar';
import Units from '../Units';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <Units />
  </StyledHeader>
);

export default Header;
