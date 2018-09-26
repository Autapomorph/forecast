import React from 'react';

import CityHeader from '../CityHeader';
import WeatherDetails from '../WeatherDetails';
import ForecastDetails from '../ForecastDetails';

import { StyledCityWrapper } from './styles';

const City = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCityWrapper>
    <CityHeader
      city={city}
      isFeatured={isFeatured}
      refetchCityWeather={refetchCityWeather}
      addCityToFeatured={addCityToFeatured}
      removeCityFromFeatured={removeCityFromFeatured}
    />
    <WeatherDetails city={city} />
    <ForecastDetails city={city} />
  </StyledCityWrapper>
);

export default City;
