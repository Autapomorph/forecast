import React from 'react';

import CitiesItem from '../CitiesItem';

import { StyledCitiesList } from './styles';

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCitiesList>
    {Object.values(cities).map(city => (
      <CitiesItem
        key={city.id}
        city={city}
        isFeatured={checkIfFeatured(city.id)}
        fetchCity={fetchCity}
        addCityToFeatured={addCityToFeatured}
        removeCityFromFeatured={removeCityFromFeatured}
      />
    ))}
  </StyledCitiesList>
);

export default CitiesList;
