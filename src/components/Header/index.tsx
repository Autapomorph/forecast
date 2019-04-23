import React from 'react';

import SearchBar from 'components/SearchBar';
import SettingsBar from 'components/settings/SettingsBar';

import { StyledHeader } from './styles';

const Header: React.FC = (): React.ReactElement => (
  <StyledHeader>
    <SearchBar />
    <SettingsBar />
  </StyledHeader>
);

export default Header;
