import React from 'react';

import WeatherIcon from '../../../common/icons/WeatherIcon';

const WeatherDetails = ({ city }) => (
  <table>
    <tbody>
      <tr>
        <td>Описание</td>
        <td>
          {city.weather.description} <WeatherIcon icon={city.weather.weatherIcon} />
        </td>
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
          &nbsp;
          <WeatherIcon wind icon={city.weather.windIcon} />
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
);

export default WeatherDetails;
