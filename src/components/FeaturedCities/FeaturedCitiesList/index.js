import React from 'react';

import FeaturedCitiesItem from '../FeaturedCitiesItem';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured, clearFeaturedCities }) => (
  <div>
    <div>
      <h3>FEATURED CITIES</h3>
      <button type="button" onClick={clearFeaturedCities}>
        Очистить список избранного
      </button>
    </div>
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
  </div>
);

export default FeaturedCitiesList;
