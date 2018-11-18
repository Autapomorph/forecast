import React from 'react';

import SearchBar from '../SearchBar';
import UnitsFormats from '../UnitsFormats';
import Languages from '../Languages';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <Languages />
    <UnitsFormats />
  </StyledHeader>
);

export default Header;
