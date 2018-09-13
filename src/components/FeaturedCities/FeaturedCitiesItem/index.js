import React from 'react';

import FeaturedButton from '../../common/FeaturedButton';

import { StyledFeaturedCityContainer, StyledFeaturedCityTitle } from './styles';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedCityContainer onClick={() => fetchCity(city.id)}>
    <StyledFeaturedCityTitle>
      <span>{city.name}</span>
      <span>&nbsp;</span>
      <span>[{city.country}]</span>
      <span>&nbsp;</span>
    </StyledFeaturedCityTitle>

    <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
  </StyledFeaturedCityContainer>
);

export default FeaturedCitiesItem;
