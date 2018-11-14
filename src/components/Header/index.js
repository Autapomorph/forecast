import React from 'react';

import SearchBar from '../SearchBar';
import UnitsFormats from '../UnitsFormats';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <UnitsFormats />
  </StyledHeader>
);

export default Header;
