import React from 'react';

import FeaturedButton from '../../common/buttons/FeaturedButton';
import CountryFlag from '../../common/CountryFlag';

import { StyledFeaturedCityWrapper, StyledFeaturedCityTitle } from './styles';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedCityWrapper onClick={() => fetchCity(city.id)}>
    <StyledFeaturedCityTitle>
      <span>{city.name}</span>
      <span>&nbsp;</span>
      <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
      <span>&nbsp;</span>
    </StyledFeaturedCityTitle>

    <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
  </StyledFeaturedCityWrapper>
);

export default FeaturedCitiesItem;
