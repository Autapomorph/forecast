import React from 'react';

import Title from '../../../common/Title';
import RetryButton from '../../../common/buttons/RetryButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';

import { StyledCityHeader, StyledTitleButtonsWrapper } from './styles';

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
      </span>

      <br />
      <Title.Subtitle>
        {city.weather.timestampDM} {city.weather.timestamp}
      </Title.Subtitle>
    </Title>

    <StyledTitleButtonsWrapper>
      <RetryButton onClick={refetchCityWeather} size="lg" />
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
    </StyledTitleButtonsWrapper>
  </StyledCityHeader>
);

export default CityHeader;
