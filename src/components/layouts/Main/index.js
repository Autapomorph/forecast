import React from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import Cities from '../../Cities';
import FeaturedCities from '../../FeaturedCities';

import { StyledLayoutContainer, StyledLayoutContent } from './styles';

const MainLayout = () => (
  <StyledLayoutContainer>
    <Header />

    <StyledLayoutContent>
      <Geolocation />
      <Cities />
      <FeaturedCities />
    </StyledLayoutContent>
  </StyledLayoutContainer>
);

export default MainLayout;
