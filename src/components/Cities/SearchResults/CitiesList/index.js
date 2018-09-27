import React from 'react';

import CitiesItem from '../CitiesItem';

import { StyledCitiesList } from './styles';

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCitiesList>
    {Object.values(cities).map(city => (
      <CitiesItem
        key={city.id}
        city={city}
        isFeatured={checkIfFeatured(city.id)}
        fetchCityWeather={fetchCityWeather}
        addCityToFeatured={addCityToFeatured}
        removeCityFromFeatured={removeCityFromFeatured}
      />
    ))}
  </StyledCitiesList>
);

export default CitiesList;
