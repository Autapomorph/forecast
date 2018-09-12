import React from 'react';

import FeaturedButton from '../../common/FeaturedButton';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <h3>
    <span onClick={() => fetchCity(city.id)}>
      {city.name}, {city.country}
    </span>
    <span>&nbsp;</span>

    <span>
      <a
        href={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&zoom=12&lat=${
          city.coords.lat
        }&lon=${city.coords.lon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        [{city.coords.lat}, {city.coords.lon}]
      </a>
      <span>&nbsp;</span>
    </span>

    <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
  </h3>
);

export default FeaturedCitiesItem;
