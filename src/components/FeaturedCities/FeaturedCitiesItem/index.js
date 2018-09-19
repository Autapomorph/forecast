import React from 'react';

import FeaturedButton from '../../common/buttons/FeaturedButton';

import { StyledFeaturedCityWrapper, StyledFeaturedCityTitle } from './styles';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedCityWrapper onClick={() => fetchCity(city.id)}>
    <StyledFeaturedCityTitle>
      <span>{city.name}</span>
      <span>&nbsp;</span>
      <span>[{city.country}]</span>
      <span>&nbsp;</span>
    </StyledFeaturedCityTitle>

    <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
  </StyledFeaturedCityWrapper>
);

export default FeaturedCitiesItem;
