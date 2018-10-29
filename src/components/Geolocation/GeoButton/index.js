import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { StyledGeoButton } from './styles';

const GeoButton = ({ isLoading, onClick }) => (
  <StyledGeoButton disabled={isLoading} onClick={onClick}>
    <FontAwesomeIcon icon={faLocationArrow} />
  </StyledGeoButton>
);

export default GeoButton;
