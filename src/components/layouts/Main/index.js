import React from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import SelectedCity from '../../Cities/SelectedCity';
import SearchResults from '../../Cities/SearchResults';
import FeaturedCities from '../../Cities/FeaturedCities';

import { StyledLayoutWrapper, StyledHeaderWrapper, StyledContentWrapper } from './styles';

const MainLayout = () => (
  <StyledLayoutWrapper>
    <StyledHeaderWrapper>
      <Header />
    </StyledHeaderWrapper>

    <StyledContentWrapper>
      <Geolocation />
      <SelectedCity />
      <SearchResults />
      <FeaturedCities />
    </StyledContentWrapper>
  </StyledLayoutWrapper>
);

export default MainLayout;
