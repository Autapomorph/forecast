import React from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import Cities from '../../Cities';
import FeaturedCities from '../../FeaturedCities';

import { StyledLayoutWrapper, StyledLayoutContent } from './styles';

const MainLayout = () => (
  <StyledLayoutWrapper>
    <Header />

    <StyledLayoutContent>
      <Geolocation />
      <Cities />
      <FeaturedCities />
    </StyledLayoutContent>
  </StyledLayoutWrapper>
);

export default MainLayout;
