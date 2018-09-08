import React from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import SelectedCity from '../../SelectedCity';
import SearchResults from '../../SearchResults';
import FeaturedCities from '../../FeaturedCities';

import { StyledLayoutContainer, StyledLayoutContent } from './styles';

const MainLayout = () => (
  <StyledLayoutContainer>
    <Header />

    <StyledLayoutContent>
      <Geolocation />
      <SelectedCity />
      <SearchResults />
      <FeaturedCities />
    </StyledLayoutContent>
  </StyledLayoutContainer>
);

export default MainLayout;
