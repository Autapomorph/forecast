import React, { Fragment } from 'react';

import FeaturedButton from '../../../common/FeaturedButton';

const CitiesItem = ({ city, isFeatured, fetchCity, addCityToFeatured, removeCityFromFeatured }) => (
  <Fragment>
    <h3>
      <span onClick={() => fetchCity(city.id)}>
        {city.name}, {city.country}, {city.weather.timestamp}
      </span>
      <span>&nbsp;</span>
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
      <FeaturedButton
        isFeatured={isFeatured}
        onRemove={() => removeCityFromFeatured(city.id)}
        onAdd={() =>
          addCityToFeatured({
            id: city.id,
            name: city.name,
            country: city.country,
            coords: city.coords,
          })
        }
      />
    </h3>

    <p>
      {city.weather.temp}
      &#8451;, wind {city.weather.windSpeed} m/s, cloudiness {city.weather.cloudiness}%
    </p>
  </Fragment>
);

export default CitiesItem;
