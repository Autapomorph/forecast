import React from 'react';

import CitiesItem from '../CitiesItem';

import { StyledCitiesList, StyledCitiesListItem } from './styles';

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCitiesList>
    {Object.values(cities).map(city => (
      <StyledCitiesListItem key={city.id}>
        <CitiesItem
          city={city}
          isFeatured={checkIfFeatured(city.id)}
          fetchCity={fetchCity}
          addCityToFeatured={addCityToFeatured}
          removeCityFromFeatured={removeCityFromFeatured}
        />
      </StyledCitiesListItem>
    ))}
  </StyledCitiesList>
);

export default CitiesList;
