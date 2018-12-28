import React from 'react';

import SearchBar from '../SearchBar';
import SettingsBar from '../settings/SettingsBar';

import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <SettingsBar />
  </StyledHeader>
);

export default Header;
