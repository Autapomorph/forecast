import React from 'react';
import Slider from 'react-slick';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import { StyledForecastWrapper, StyledForecastItem } from './styles';

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
          <WeatherIcon icon={f.weatherIcon} />
          <br />
          {f.temp}
          &#8451;
          <br />
          {f.description}
          <br />
          {f.windSpeed} м/с,&nbsp;
          <WeatherIcon wind icon={f.windIcon} />
          <br />
          {f.timestampDM}
          <br />
          {f.timestamp}
        </StyledForecastItem>
      ))}
    </Slider>
  </StyledForecastWrapper>
);

export default ForecastDetails;
