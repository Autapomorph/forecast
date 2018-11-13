import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledForecastWrapper,
  StyledForecastItem,
  StyledItemTop,
  StyledItemMiddle,
  StyledItemBottom,
  StyledWeatherIcon,
  StyledTemperature,
  StyledDescription,
  StyledIcon,
  StyledIconDescription,
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
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
    >
      {city.forecast.map(f => (
        <StyledForecastItem key={f.timestamp}>
          <StyledItemTop>
            <StyledWeatherIcon>
              <WeatherIcon icon={f.weatherIcon} size="lg" />
            </StyledWeatherIcon>

            <StyledTemperature>
              {f.temp}
              &#8451;
            </StyledTemperature>

            <StyledDescription>{f.description}</StyledDescription>
          </StyledItemTop>

          <StyledItemMiddle>
            <StyledIcon>
              <FontAwesomeIcon icon={faTint} size="lg" />
            </StyledIcon>
            <StyledIconDescription>{f.humidity}%</StyledIconDescription>

            <StyledIcon>
              <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
            </StyledIcon>
            <StyledIconDescription>{f.pressure} мм</StyledIconDescription>

            <StyledIcon>
              <WeatherIcon wind icon={f.windIcon} size="lg" />
            </StyledIcon>
            <StyledIconDescription>{f.windSpeed} м/с</StyledIconDescription>
          </StyledItemMiddle>

          <StyledItemBottom>
            <StyledDivider />

            <StyledTimestamp>
              {f.timestampDM}
              &nbsp;
              {f.timestamp}
            </StyledTimestamp>
          </StyledItemBottom>
        </StyledForecastItem>
      ))}
    </Slider>
  </StyledForecastWrapper>
);

export default ForecastDetails;
