import React from 'react';

import SelectedCity from './SelectedCity';
import SearchResults from './SearchResults';

import { StyledCitiesSection } from './styles';

const Cities = () => (
  <StyledCitiesSection>
    <SelectedCity />
    <SearchResults />
  </StyledCitiesSection>
);

export default Cities;
