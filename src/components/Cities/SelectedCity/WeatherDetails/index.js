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
        {city.weather.description} <WeatherIcon icon={city.weather.weatherIcon} />
      </StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>Температура:</StyledItemTitle>
      <StyledItemDescription>
        {city.weather.temp}
        &#8451;
      </StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>Облачность:</StyledItemTitle>
      <StyledItemDescription>{city.weather.cloudiness}%</StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>Ветер:</StyledItemTitle>
      <StyledItemDescription>
        {city.weather.windSpeed} м/с, {city.weather.windCardDir}
        &nbsp;
        <WeatherIcon wind icon={city.weather.windIcon} />
      </StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>Давление:</StyledItemTitle>
      <StyledItemDescription>{city.weather.pressure} мм рт. ст.</StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>Влажность:</StyledItemTitle>
      <StyledItemDescription>{city.weather.humidity}%</StyledItemDescription>
    </StyledItem>

    <StyledItem>
      <StyledItemTitle>День:</StyledItemTitle>
      <StyledItemDescription>
        {city.weather.sunrise} &mdash; {city.weather.sunset}
      </StyledItemDescription>
    </StyledItem>
  </StyledWeatherDetailsWrapper>
);

export default WeatherDetails;
