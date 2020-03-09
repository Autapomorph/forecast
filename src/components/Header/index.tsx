import React from 'react';

import SearchBar from 'components/SearchBar';

import * as S from './styles';

const Header = (): React.ReactElement => (
  <S.Header>
    <SearchBar />
  </S.Header>
);

export default Header;
