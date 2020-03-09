import React from 'react';

import * as S from './styles';

type Props = {
  country: string;
  style?: React.CSSProperties;
};

const CountryFlag = ({ country, style }: Props): React.ReactElement => (
  <S.CountryFlag country={country} style={style} />
);

export default CountryFlag;
