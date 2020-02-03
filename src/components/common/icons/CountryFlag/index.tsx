import React from 'react';

import * as S from './styles';

type Props = {
  country: string;
  size?: string;
};

const CountryFlag = ({ country, size = '1em' }: Props): React.ReactElement => (
  <S.CountryFlag country={country} size={size} />
);

export default CountryFlag;
