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
        {`${city.name} `}
        <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
      </StyledFeaturedCityTitle>

      <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
    </StyledFeaturedCityHeader>
  </StyledFeaturedCityWrapper>
);

export default FeaturedCitiesItem;
