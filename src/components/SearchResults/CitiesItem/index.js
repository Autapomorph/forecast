import React from 'react';

const CitiesItem = ({ city, isFeatured, fetchCity, addCityToFeatured, removeCityFromFeatured }) => (
  <div>
    <p onClick={() => fetchCity(city.id)}>
      {city.name}, {city.country} {city.weather.description}
    </p>

    <p>
      {city.weather.temp}
      &#8451;, wind {city.weather.windSpeed} m/s, cloudiness {city.weather.cloudiness}%
    </p>

    <p>
      Geo coords &nbsp;
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
      {isFeatured && (
        <button type="button" onClick={() => removeCityFromFeatured(city.id)}>
          Удалить из избранного
        </button>
      )}

      {!isFeatured && (
        <button
          type="button"
          onClick={() =>
            addCityToFeatured({
              id: city.id,
              name: city.name,
              country: city.country,
              coords: city.coords,
            })
          }
        >
          В избранное
        </button>
      )}
    </p>
  </div>
);

export default CitiesItem;
