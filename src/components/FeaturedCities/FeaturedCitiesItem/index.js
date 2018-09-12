import React, { Fragment } from 'react';

import FeaturedButton from '../../common/FeaturedButton';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <Fragment>
    <h3 onClick={() => fetchCity(city.id)}>
      {city.name}, {city.country}
      <span>&nbsp;</span>
    </h3>

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
  </Fragment>
);

export default FeaturedCitiesItem;
