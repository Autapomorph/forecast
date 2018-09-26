import React from 'react';

import Title from '../../../common/Title';
import RetryButton from '../../../common/buttons/RetryButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';

import { StyledCityHeader } from './styles';

const CityHeader = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCityHeader>
    <Title>
      <span>
        <span>{city.name}</span>
        <span>&nbsp;</span>
        <CountryFlag country={city.country.toLowerCase()} />
        <span>&nbsp;</span>
        <span>{city.weather.timestamp}</span>
        <span>&nbsp;</span>
      </span>
      <RetryButton onClick={refetchCityWeather} />
    </Title>

    <FeaturedButton
      isFeatured={isFeatured}
      onRemove={() => removeCityFromFeatured(city.id)}
      onAdd={() =>
        addCityToFeatured({
          id: city.id,
          name: city.name,
          country: city.country,
          coords: city.coords,
        })
      }
    />
  </StyledCityHeader>
);

export default CityHeader;
