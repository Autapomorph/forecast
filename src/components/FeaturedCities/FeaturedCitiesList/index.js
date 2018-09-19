import React from 'react';

import FeaturedCitiesItem from '../FeaturedCitiesItem';

import { StyledFeaturedList, StyledFeaturedListItem } from './styles';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured }) => (
  <StyledFeaturedList>
    {cities &&
      Object.values(cities)
        .sort((cityA, cityB) => cityA.timestamp - cityB.timestamp)
        .map(city => (
          <StyledFeaturedListItem key={city.id}>
            <FeaturedCitiesItem
              city={city}
              fetchCity={fetchCity}
              removeCityFromFeatured={removeCityFromFeatured}
            />
          </StyledFeaturedListItem>
        ))}
  </StyledFeaturedList>
);

export default FeaturedCitiesList;
