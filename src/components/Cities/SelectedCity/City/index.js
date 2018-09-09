import React from 'react';

const City = ({ city, isFeatured, addCityToFeatured, removeCityFromFeatured }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td>time</td>
          <td>{city.weather.timestamp}</td>
        </tr>

        <tr>
          <td>city</td>
          <td>
            {city.name}, {city.country}
            &nbsp;
            <a
              href={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&zoom=12&lat=${
                city.coords.lat
              }&lon=${city.coords.lon}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              [{city.coords.lat}, {city.coords.lon}]
            </a>
          </td>
        </tr>

        <tr>
          <td>description</td>
          <td>{city.weather.description}</td>
        </tr>

        <tr>
          <td>temp</td>
          <td>
            {city.weather.temp}
            &#8451;
          </td>
        </tr>

        <tr>
          <td>cloudiness</td>
          <td>{city.weather.cloudiness}%</td>
        </tr>

        <tr>
          <td>pressure</td>
          <td>
            {city.weather.pressure}
            mmHg
          </td>
        </tr>

        <tr>
          <td>humidity</td>
          <td>{city.weather.humidity}%</td>
        </tr>

        <tr>
          <td>sunrise</td>
          <td>{city.weather.sunrise}</td>
        </tr>

        <tr>
          <td>sunset</td>
          <td>{city.weather.sunset}</td>
        </tr>
      </tbody>
    </table>

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

export default City;
