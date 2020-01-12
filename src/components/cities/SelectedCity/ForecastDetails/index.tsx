import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { City, Weather } from 'models';
import { UnitsFormatContext } from 'store/settings/context';
import convertSpeed from 'utils/weatherData/wind';
import convertTemp from 'utils/weatherData/temperature';
import convertPressure from 'utils/weatherData/pressure';
import { toDayMonth } from 'utils/weatherData/time/coverters';
import WeatherIcon from 'components/common/icons/WeatherIcon';

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

type Props = {
  city: City & Weather;
};

const ForecastDetails: React.FC<Props> = ({ city }): React.ReactElement => {
  const { t, i18n } = useTranslation();
  const unitsFormat = useContext(UnitsFormatContext);

  return (
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
        {city.dailyForecast.map(day => {
          const convertedTemp = convertTemp(day.temp, unitsFormat);
          const convertedPressure = convertPressure(day.pressure, unitsFormat);
          const convertedWindSpeed = convertSpeed(day.wind.speed, unitsFormat);

          return (
            <StyledForecastItem key={day.timestamp.toString()}>
              <StyledForecastItemDetail>
                <WeatherIcon icon={day.weatherIcon} size="lg" />
              </StyledForecastItemDetail>

              <StyledForecastItemDetail>
                {`${convertedTemp}${t(`settings.unitsFormats.temp.${unitsFormat}`)}`}
              </StyledForecastItemDetail>

              <StyledForecastItemDetail>
                <StyledDescription>{day.summary}</StyledDescription>
              </StyledForecastItemDetail>

              <StyledItemDetailsList>
                <StyledIcon>
                  <FontAwesomeIcon icon={faTint} size="lg" />
                </StyledIcon>
                <StyledIconDescription>{`${day.humidity}%`}</StyledIconDescription>

                <StyledIcon>
                  <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
                </StyledIcon>
                <StyledIconDescription>
                  {`${convertedPressure}${t(`settings.unitsFormats.pressure.${unitsFormat}`)}`}
                </StyledIconDescription>

                <StyledIcon>
                  <WeatherIcon wind icon={day.wind.icon} size="lg" />
                </StyledIcon>
                <StyledIconDescription>
                  {`${convertedWindSpeed} ${t(`settings.unitsFormats.speed.${unitsFormat}`)}`}
                </StyledIconDescription>
              </StyledItemDetailsList>

              <StyledDivider />

              <StyledForecastItemDetail>
                {toDayMonth(day.timestamp, i18n.language)}
              </StyledForecastItemDetail>
            </StyledForecastItem>
          );
        })}
      </Slider>
    </StyledForecastWrapper>
  );
};

export default ForecastDetails;
