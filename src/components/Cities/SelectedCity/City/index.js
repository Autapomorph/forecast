import React from 'react';

import Title from '../../../common/Title';
import RetryButton from '../../../common/RetryButton';
import FeaturedButton from '../../../common/FeaturedButton';
import WeatherIcon from '../../../common/WeatherIcon';

import { StyledCityWrapper, StyledCityHeader } from './styles';

const City = ({ city, isFeatured, refetchCity, addCityToFeatured, removeCityFromFeatured }) => (
  <StyledCityWrapper>
    <StyledCityHeader>
      <Title>
        <span>
          <span>{city.name}</span>
          <span>&nbsp;</span>
          <span>[{city.country}]</span>
          <span>,&nbsp;</span>
          <span>{city.weather.timestamp}</span>
          <span>&nbsp;</span>
        </span>
        <RetryButton onClick={refetchCity} />
      </Title>

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
    </StyledCityHeader>

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
            {city.weather.windSpeed} м/с, {city.weather.windCardDir}{' '}
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
  </StyledCityWrapper>
);

export default City;
