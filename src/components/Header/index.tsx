import React from 'react';

import SearchBar from 'components/SearchBar';
import SettingsBar from 'components/settings/SettingsBar';

import * as S from './styles';

const Header = (): React.ReactElement => (
  <S.Header>
    <SearchBar />
    <SettingsBar />
  </S.Header>
);

export default Header;
