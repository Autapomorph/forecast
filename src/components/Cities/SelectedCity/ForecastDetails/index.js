import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledForecastWrapper,
  StyledForecastItem,
  StyledForecastItemDetail,
  StyledForecastItemDescription,
  StyledForecastItemHumidity,
  StyledForecastItemWind,
  StyledForecastItemDivider,
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
          <StyledForecastItemDetail>
            <WeatherIcon icon={f.weatherIcon} size="lg" />
          </StyledForecastItemDetail>

          <StyledForecastItemDetail>
            <span>
              {f.temp}
              &#8451;
            </span>
          </StyledForecastItemDetail>

          <StyledForecastItemDescription>
            <span>{f.description}</span>
          </StyledForecastItemDescription>

          <StyledForecastItemHumidity>
            <FontAwesomeIcon icon={faTint} />
            <span>&nbsp;</span>
            <span>{f.humidity}%</span>
          </StyledForecastItemHumidity>

          <StyledForecastItemWind>
            <WeatherIcon wind icon={f.windIcon} size="lg" />
            <span>&nbsp;</span>
            <span>{f.windSpeed} м/с</span>
          </StyledForecastItemWind>

          <StyledForecastItemDivider />

          <StyledForecastItemDetail>
            <span>{f.timestampDM}</span>
            <span>{f.timestamp}</span>
          </StyledForecastItemDetail>
        </StyledForecastItem>
      ))}
    </Slider>
  </StyledForecastWrapper>
);

export default ForecastDetails;
