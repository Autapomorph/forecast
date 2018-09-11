import React from 'react';

import FeaturedCitiesItem from '../FeaturedCitiesItem';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured }) => (
  <ul>
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
  </ul>
);

export default FeaturedCitiesList;
