import React, { Fragment } from 'react';

import FeaturedButton from '../../../common/FeaturedButton';

const CitiesItem = ({ city, isFeatured, fetchCity, addCityToFeatured, removeCityFromFeatured }) => (
  <Fragment>
    <h3>
      <span onClick={() => fetchCity(city.id)}>
        <span>{city.name}</span>
        <span>&nbsp;</span>
        <span>[{city.country}]</span>
        <span>&nbsp;</span>
      </span>

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
      <span>{city.weather.description},</span>
      <span>&nbsp;</span>
      <span>
        {city.weather.temp}
        &#8451;,
      </span>
      <span>&nbsp;</span>
      <span>ветер {city.weather.windSpeed} м/с</span>
    </p>
  </Fragment>
);

export default CitiesItem;
