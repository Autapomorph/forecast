import React from 'react';

import * as S from './styles';

type Props = {
  country: string;
  size?: string;
};

const CountryFlag: React.FC<Props> = ({ country, size = '1em' }): React.ReactElement => (
  <S.CountryFlag country={country} size={size} />
);

export default CountryFlag;
