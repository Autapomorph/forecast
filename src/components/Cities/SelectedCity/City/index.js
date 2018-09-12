import React from 'react';

import FeaturedButton from '../../../common/FeaturedButton';

import { StyledCity } from './styles';

const City = ({ city, isFeatured, addCityToFeatured, removeCityFromFeatured }) => (
  <StyledCity>
    <h3>
      {city.name}, {city.country}, {city.weather.timestamp}
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

    <table>
      <tbody>
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
          <td>wind</td>
          <td>{city.weather.windSpeed} m/s</td>
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
          <td>sun day</td>
          <td>
            {city.weather.sunrise} &mdash; {city.weather.sunset}
          </td>
        </tr>
      </tbody>
    </table>
  </StyledCity>
);

export default City;
