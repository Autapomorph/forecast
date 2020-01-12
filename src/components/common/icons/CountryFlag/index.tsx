import React from 'react';

import { StyledCountryFlag } from './styles';

type Props = {
  country: string;
  size?: string;
};

const CountryFlag: React.FC<Props> = ({ country, size = '1em' }): React.ReactElement => (
  <StyledCountryFlag country={country} size={size} />
);

export default CountryFlag;
