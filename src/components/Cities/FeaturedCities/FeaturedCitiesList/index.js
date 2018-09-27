import React from 'react';

import FeaturedCity from '../FeaturedCity';

import { StyledFeaturedList } from './styles';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured }) => {
  const featuredCities = Object.values(cities)
    .sort((cityA, cityB) => cityA.timestamp - cityB.timestamp)
    .map(city => (
      <FeaturedCity
        key={city.id}
        city={city}
        fetchCity={fetchCity}
        removeCityFromFeatured={removeCityFromFeatured}
      />
    ));

  return <StyledFeaturedList>{featuredCities}</StyledFeaturedList>;
};

export default FeaturedCitiesList;
