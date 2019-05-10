import React from 'react';

import { StyledCountryFlag } from './styles';

interface IProps {
  country: string;
  size?: string;
}

const CountryFlag: React.FC<IProps> = ({ country, size = '1em' }): React.ReactElement => (
  <StyledCountryFlag country={country} size={size} />
);

export default CountryFlag;
