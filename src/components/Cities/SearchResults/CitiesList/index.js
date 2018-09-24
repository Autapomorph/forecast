import React from 'react';

import CitiesItem from '../CitiesItem';

import { StyledCitiesList, StyledCitiesListItem } from './styles';

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCitiesList>
    {Object.values(cities).map(city => (
      <StyledCitiesListItem key={city.id}>
        <CitiesItem
          city={city}
          isFeatured={checkIfFeatured(city.id)}
          fetchCityWeather={fetchCityWeather}
          addCityToFeatured={addCityToFeatured}
          removeCityFromFeatured={removeCityFromFeatured}
        />
      </StyledCitiesListItem>
    ))}
  </StyledCitiesList>
);

export default CitiesList;
