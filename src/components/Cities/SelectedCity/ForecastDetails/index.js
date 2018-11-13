import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { UnitsFormatContext } from '../../../../store/settings/context';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature/tempConverter';
import convertPressure from '../../../../utils/cityData/pressure/pressureConverter';

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
  <UnitsFormatContext.Consumer>
    {unitsFormat => (
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
          {city.forecast.map(f => {
            const convertedTemp = convertTemp(f.temp, unitsFormat.temp.title);
            const convertedPressure = convertPressure(f.pressure, unitsFormat.pressure.title);

            return (
              <StyledForecastItem key={f.timestamp}>
                <StyledWeatherIcon>
                  <WeatherIcon icon={f.weatherIcon} size="lg" />
                </StyledWeatherIcon>

                <StyledTemperature>
                  <span>{`${convertedTemp}${unitsFormat.temp.symbol}`}</span>
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
                  <span>{`${convertedPressure}${unitsFormat.pressure.symbol}`}</span>
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
            );
          })}
        </Slider>
      </StyledForecastWrapper>
    )}
  </UnitsFormatContext.Consumer>
);

export default ForecastDetails;
