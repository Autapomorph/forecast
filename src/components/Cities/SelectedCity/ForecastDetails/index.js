import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledForecastWrapper,
  StyledForecastItem,
  StyledForecastItemDetail,
  StyledDescription,
  StyledItemDetailsList,
  StyledIcon,
  StyledIconDescription,
  StyledDivider,
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
          <StyledForecastItemDetail>
            <WeatherIcon icon={f.weatherIcon} size="lg" />
          </StyledForecastItemDetail>

          <StyledForecastItemDetail>
            {f.temp}
            &#8451;
          </StyledForecastItemDetail>

          <StyledForecastItemDetail>
            <StyledDescription>{f.description}</StyledDescription>
          </StyledForecastItemDetail>

          <StyledItemDetailsList>
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
          </StyledItemDetailsList>

          <StyledDivider />

          <StyledForecastItemDetail>{`${f.timestampDM} ${f.timestamp}`}</StyledForecastItemDetail>
        </StyledForecastItem>
      ))}
    </Slider>
  </StyledForecastWrapper>
);

export default ForecastDetails;
