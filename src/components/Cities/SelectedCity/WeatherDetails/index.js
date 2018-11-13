import React from 'react';

import { UnitsFormatContext } from '../../../../store/settings/context';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature/tempConverter';
import convertPressure from '../../../../utils/cityData/pressure/pressureConverter';

import {
  StyledWeatherDetailsWrapper,
  StyledWeatherDetailsItem as StyledItem,
  StyledWeatherDetailsItemTitle as StyledItemTitle,
  StyledWeatherDetailsItemDescription as StyledItemDescription,
} from './styles';

const WeatherDetails = ({ city }) => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat.temp.title);
      const convertedPressure = convertPressure(city.weather.pressure, unitsFormat.pressure.title);

      return (
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
              {`${convertedTemp}${unitsFormat.temp.symbol}`}
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
            <StyledItemDescription>
              {`${convertedPressure}${unitsFormat.pressure.symbol}`}
            </StyledItemDescription>

            <StyledItemTitle>Влажность:</StyledItemTitle>
            <StyledItemDescription>{city.weather.humidity}%</StyledItemDescription>

            <StyledItemTitle>День:</StyledItemTitle>
            <StyledItemDescription>
              {city.weather.sunrise} &mdash; {city.weather.sunset}
            </StyledItemDescription>
          </StyledItem>
        </StyledWeatherDetailsWrapper>
      );
    }}
  </UnitsFormatContext.Consumer>
);

export default WeatherDetails;
