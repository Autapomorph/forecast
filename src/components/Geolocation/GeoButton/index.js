import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { StyledGeoButton, StyledGeoIconButton } from './styles';

const GeoButton = ({ icon, isLoading, onClick }) =>
  icon ? (
    <StyledGeoIconButton disabled={isLoading} onClick={onClick}>
      <FontAwesomeIcon icon={faLocationArrow} />
    </StyledGeoIconButton>
  ) : (
    <StyledGeoButton disabled={isLoading} onClick={onClick}>
      {isLoading ? 'Подождите...' : 'Мое местоположение'}
    </StyledGeoButton>
  );

export default GeoButton;
