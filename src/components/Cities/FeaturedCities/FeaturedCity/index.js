import React from 'react';

import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityHeader,
  StyledFeaturedCityTitle,
} from './styles';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedCityWrapper>
    <StyledFeaturedCityHeader>
      <StyledFeaturedCityTitle onClick={() => fetchCity(city.id)}>
        <span>{city.name}</span>
        <span>&nbsp;</span>
        <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
        <span>&nbsp;</span>
      </StyledFeaturedCityTitle>

      <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
    </StyledFeaturedCityHeader>
  </StyledFeaturedCityWrapper>
);

export default FeaturedCitiesItem;
