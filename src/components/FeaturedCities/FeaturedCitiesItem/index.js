import React from 'react';

import FeaturedButton from '../../common/buttons/FeaturedButton';
import CountryFlag from '../../common/icons/CountryFlag';

import { StyledFeaturedCity, StyledFeaturedCityHeader, StyledFeaturedCityTitle } from './styles';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedCity>
    <StyledFeaturedCityHeader>
      <StyledFeaturedCityTitle onClick={() => fetchCity(city.id)}>
        <span>{city.name}</span>
        <span>&nbsp;</span>
        <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
        <span>&nbsp;</span>
      </StyledFeaturedCityTitle>

      <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
    </StyledFeaturedCityHeader>
  </StyledFeaturedCity>
);

export default FeaturedCitiesItem;
