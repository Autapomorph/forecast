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
import { toDayMonth, toHourMinutes } from 'utils/weatherData/time/coverters';
import WeatherIcon from 'components/common/icons/WeatherIcon';

import * as S from './styles';

type Props = {
  city: City & Weather;
};

const ForecastDetails: React.FC<Props> = ({ city }): React.ReactElement => {
  const { t, i18n } = useTranslation();
  const unitsFormat = useContext(UnitsFormatContext);
  const tS = (key: string, options?: object): string => t(`settings.unitsFormats.${key}`, options);

  return (
    <S.ForecastWrapper>
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
            <S.Item key={day.timestamp.toString()}>
              <S.ItemDetail>
                <WeatherIcon icon={day.weatherIcon} size="lg" />
              </S.ItemDetail>

              <S.ItemDetail>{`${convertedTemp}${tS(`temp.${unitsFormat}`)}`}</S.ItemDetail>

              <S.ItemDetail>
                <S.Description>{day.summary}</S.Description>
              </S.ItemDetail>

              <S.ItemDetailsList>
                <S.Icon>
                  <FontAwesomeIcon icon={faTint} size="lg" />
                </S.Icon>
                <S.IconDescription>{`${day.humidity}%`}</S.IconDescription>

                <S.Icon>
                  <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
                </S.Icon>
                <S.IconDescription>
                  {`${convertedPressure}${tS(`pressure.${unitsFormat}`)}`}
                </S.IconDescription>

                <S.Icon>
                  <WeatherIcon wind icon={day.wind.icon} size="lg" />
                </S.Icon>
                <S.IconDescription>
                  {`${convertedWindSpeed} ${tS(`speed.${unitsFormat}`)}`}
                </S.IconDescription>

                <S.Icon>
                  <WeatherIcon icon="sunrise" />
                </S.Icon>
                <S.IconDescription>
                  {`${toHourMinutes(day.sunrise, i18n.language)}`}
                </S.IconDescription>

                <S.Icon>
                  <WeatherIcon icon="sunset" />
                </S.Icon>
                <S.IconDescription>
                  {`${toHourMinutes(day.sunset, i18n.language)}`}
                </S.IconDescription>
              </S.ItemDetailsList>

              <S.Divider />

              <S.ItemDetail>{toDayMonth(day.timestamp, i18n.language)}</S.ItemDetail>
            </S.Item>
          );
        })}
      </Slider>
    </S.ForecastWrapper>
  );
};

export default ForecastDetails;
