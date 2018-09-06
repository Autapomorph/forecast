import React from 'react';

const FeaturedCitiesItem = ({ city, fetchCity, removeCityFromFeatured }) => (
  <div>
    <p>
      <span onClick={() => fetchCity(city.id)}>
        {city.name}, {city.country}
        &nbsp;
      </span>
      <a
        href={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&zoom=12&lat=${
          city.coords.lat
        }&lon=${city.coords.lon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        [{city.coords.lat}, {city.coords.lon}]
      </a>
    </p>

    <p>
      <button type="button" onClick={() => removeCityFromFeatured(city.id)}>
        Удалить из избранного
      </button>
    </p>
  </div>
);

export default FeaturedCitiesItem;
