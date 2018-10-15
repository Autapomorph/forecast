import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledForecastWrapper,
  StyledForecastItem,
  StyledWeatherIcon,
  StyledTemperature,
  StyledDescription,
  StyledHumidity,
  StyledPressure,
  StyledWind,
  StyledDivider,
  StyledTimestamp,
} from './styles';

const ForecastDetails = ({ city }) => (
  <StyledForecastWrapper>
    <Slider
      infinite={false}
      slidesToShow={5}
      slidesToScroll={5}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
    >
      {city.forecast.map(f => (
        <StyledForecastItem key={f.timestamp}>
          <StyledWeatherIcon>
            <WeatherIcon icon={f.weatherIcon} size="lg" />
          </StyledWeatherIcon>

          <StyledTemperature>
            <span>
              {f.temp}
              &#8451;
            </span>
          </StyledTemperature>

          <StyledDescription>
            <span>{f.description}</span>
          </StyledDescription>

          <StyledHumidity>
            <FontAwesomeIcon icon={faTint} size="lg" />
            <span>&nbsp;</span>
            <span>{f.humidity}%</span>
          </StyledHumidity>

          <StyledPressure>
            <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
            <span>&nbsp;</span>
            <span>{f.pressure} мм</span>
          </StyledPressure>

          <StyledWind>
            <WeatherIcon wind icon={f.windIcon} size="lg" />
            <span>&nbsp;</span>
            <span>{f.windSpeed} м/с</span>
          </StyledWind>

          <StyledDivider />

          <StyledTimestamp>
            <span>{f.timestampDM}</span>
            <span>{f.timestamp}</span>
          </StyledTimestamp>
        </StyledForecastItem>
      ))}
    </Slider>
  </StyledForecastWrapper>
);

export default ForecastDetails;
