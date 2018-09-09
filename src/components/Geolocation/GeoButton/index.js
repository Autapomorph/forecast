import React from 'react';

import { StyledGeoButton } from './styles';

const GeoButton = ({ isLoading, onClick }) => (
  <StyledGeoButton disabled={isLoading} onClick={onClick}>
    {isLoading ? 'fetching geolocation' : 'Мое местоположение'}
  </StyledGeoButton>
);

export default GeoButton;
