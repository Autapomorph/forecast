import React from 'react';

import FeaturedCitiesItem from '../FeaturedCitiesItem';

import { StyledFeaturedList } from './styles';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedList>
    {cities &&
      Object.values(cities)
        .sort((cityA, cityB) => cityA.timestamp - cityB.timestamp)
        .map(city => (
          <li key={city.id}>
            <FeaturedCitiesItem
              city={city}
              fetchCity={fetchCity}
              removeCityFromFeatured={removeCityFromFeatured}
            />
          </li>
        ))}
  </StyledFeaturedList>
);

export default FeaturedCitiesList;
