import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { UnitsFormatContext } from '../../../../store/settings/context';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature';
import convertPressure from '../../../../utils/cityData/pressure';
import convertSpeed from '../../../../utils/cityData/wind';

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
            const convertedWindSpeed = convertSpeed(f.windSpeed, unitsFormat.speed.title);

            return (
              <StyledForecastItem key={f.timestamp}>
                <StyledForecastItemDetail>
                  <WeatherIcon icon={f.weatherIcon} size="lg" />
                </StyledForecastItemDetail>

                <StyledForecastItemDetail>
                  {`${convertedTemp}${unitsFormat.temp.symbol}`}
                </StyledForecastItemDetail>

                <StyledForecastItemDetail>
                  <StyledDescription>{f.description}</StyledDescription>
                </StyledForecastItemDetail>

                <StyledItemDetailsList>
                  <StyledIcon>
                    <FontAwesomeIcon icon={faTint} size="lg" />
                  </StyledIcon>
                  <StyledIconDescription>{`${f.humidity}%`}</StyledIconDescription>

                  <StyledIcon>
                    <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
                  </StyledIcon>
                  <StyledIconDescription>
                    {`${convertedPressure}${unitsFormat.pressure.symbol}`}
                  </StyledIconDescription>

                  <StyledIcon>
                    <WeatherIcon wind icon={f.windIcon} size="lg" />
                  </StyledIcon>
                  <StyledIconDescription>
                    {`${convertedWindSpeed} ${unitsFormat.speed.symbol}`}
                  </StyledIconDescription>
                </StyledItemDetailsList>

                <StyledDivider />

                <StyledForecastItemDetail>
                  {`${f.timestampDM} ${f.timestamp}`}
                </StyledForecastItemDetail>
              </StyledForecastItem>
            );
          })}
        </Slider>
      </StyledForecastWrapper>
    )}
  </UnitsFormatContext.Consumer>
);

export default ForecastDetails;
