import React from 'react';

import SearchBar from '../SearchBar';
import UnitsFormats from '../UnitsFormats';
import Languages from '../Languages';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <UnitsFormats />
    <Languages />
  </StyledHeader>
);

export default Header;
