import React from 'react';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledWeatherDetailsWrapper,
  StyledWeatherDetailsItem as StyledItem,
  StyledWeatherDetailsItemTitle as StyledItemTitle,
  StyledWeatherDetailsItemDescription as StyledItemDescription,
} from './styles';

const WeatherDetails = ({ city }) => (
  <StyledWeatherDetailsWrapper>
    <StyledItem>
      <StyledItemTitle>Описание:</StyledItemTitle>
      <StyledItemDescription>
        <span>
          {city.weather.description} <WeatherIcon icon={city.weather.weatherIcon} size="lg" />
        </span>
      </StyledItemDescription>

      <StyledItemTitle>Температура:</StyledItemTitle>
      <StyledItemDescription>
        {city.weather.temp}
        &#8451;
      </StyledItemDescription>

      <StyledItemTitle>Облачность:</StyledItemTitle>
      <StyledItemDescription>{city.weather.cloudiness}%</StyledItemDescription>

      <StyledItemTitle>Ветер:</StyledItemTitle>
      <StyledItemDescription>
        <span>
          {city.weather.windSpeed} м/с, {city.weather.windCardDir}
          &nbsp;
          <WeatherIcon wind icon={city.weather.windIcon} size="lg" />
        </span>
      </StyledItemDescription>

      <StyledItemTitle>Давление:</StyledItemTitle>
      <StyledItemDescription>{city.weather.pressure} мм рт. ст.</StyledItemDescription>

      <StyledItemTitle>Влажность:</StyledItemTitle>
      <StyledItemDescription>{city.weather.humidity}%</StyledItemDescription>

      <StyledItemTitle>День:</StyledItemTitle>
      <StyledItemDescription>
        {city.weather.sunrise} &mdash; {city.weather.sunset}
      </StyledItemDescription>
    </StyledItem>
  </StyledWeatherDetailsWrapper>
);

export default WeatherDetails;
