import React from 'react';

import Title from '../../../common/Title';
import FeaturedButton from '../../../common/FeaturedButton';

import { StyledCity } from './styles';

const City = ({ city, isFeatured, addCityToFeatured, removeCityFromFeatured }) => (
  <StyledCity>
    <Title>
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
    </Title>

    <table>
      <tbody>
        <tr>
          <td>Описание</td>
          <td>{city.weather.description}</td>
        </tr>

        <tr>
          <td>Температура</td>
          <td>
            {city.weather.temp}
            &#8451;
          </td>
        </tr>

        <tr>
          <td>Облачность</td>
          <td>{city.weather.cloudiness}%</td>
        </tr>

        <tr>
          <td>Ветер</td>
          <td>
            {city.weather.windSpeed} м/с, {city.weather.windCardDir}
          </td>
        </tr>

        <tr>
          <td>Давление</td>
          <td>{city.weather.pressure} мм рт. ст.</td>
        </tr>

        <tr>
          <td>Влажность</td>
          <td>{city.weather.humidity}%</td>
        </tr>

        <tr>
          <td>День</td>
          <td>
            {city.weather.sunrise} &mdash; {city.weather.sunset}
          </td>
        </tr>
      </tbody>
    </table>
  </StyledCity>
);

export default City;
