import React from 'react';

import { StyledCountryFlag } from './styles';

interface ICountryFlagProps {
  country: string;
  size?: string;
}

const CountryFlag: React.FC<ICountryFlagProps> = ({
  country,
  size = '1em',
}): React.ReactElement => <StyledCountryFlag country={country} size={size} />;

export default CountryFlag;
