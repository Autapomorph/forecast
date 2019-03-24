import React from 'react';

import { StyledCountryFlag } from './styles';

interface ICountryFlagProps {
  country: string;
  size: string;
}

const CountryFlag: React.FC<ICountryFlagProps> = (props): React.ReactElement => (
  <StyledCountryFlag {...props} />
);

export default CountryFlag;
