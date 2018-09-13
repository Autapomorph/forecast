import React from 'react';

import Title from '../../../common/Title';
import FeaturedButton from '../../../common/FeaturedButton';

import { StyledCityContainer, StyledCityHeader } from './styles';

const City = ({ city, isFeatured, addCityToFeatured, removeCityFromFeatured }) => (
  <StyledCityContainer>
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
  </StyledCityContainer>
);

export default City;
