import React from 'react';

import CitiesItem from '../CitiesItem';

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <div>
    <h3>SEARCH RESULTS</h3>
    <ul>
      {Object.values(cities).map(city => (
        <li key={city.id}>
          <CitiesItem
            city={city}
            isFeatured={checkIfFeatured(city.id)}
            fetchCity={fetchCity}
            addCityToFeatured={addCityToFeatured}
            removeCityFromFeatured={removeCityFromFeatured}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default CitiesList;
