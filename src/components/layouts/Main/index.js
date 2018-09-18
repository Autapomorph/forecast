import React from 'react';

import Header from '../../Header';
import Geolocation from '../../Geolocation';
import Cities from '../../Cities';
import FeaturedCities from '../../FeaturedCities';

import { StyledLayoutWrapper, StyledHeaderWrapper, StyledContentWrapper } from './styles';

const MainLayout = () => (
  <StyledLayoutWrapper>
    <StyledHeaderWrapper>
      <Header />
    </StyledHeaderWrapper>

    <StyledContentWrapper>
      <Geolocation />
      <Cities />
      <FeaturedCities />
    </StyledContentWrapper>
  </StyledLayoutWrapper>
);

export default MainLayout;
