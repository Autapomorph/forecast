import React from 'react';

import SelectedCity from './SelectedCity';
import SearchResults from './SearchResults';

import { StyledCities } from './styles';

const Cities = () => (
  <StyledCities>
    <SelectedCity />
    <SearchResults />
  </StyledCities>
);

export default Cities;
