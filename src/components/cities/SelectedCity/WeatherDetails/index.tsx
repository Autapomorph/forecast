import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { City, Weather } from 'models';
import { UnitsFormatContext } from 'store/settings/context';
import convertSpeed from 'utils/weatherData/wind';
import convertTemp from 'utils/weatherData/temperature';
import convertPressure from 'utils/weatherData/pressure';
import { toHourMinutes, getDurationHourMinutes } from 'utils/weatherData/time/coverters';
import WeatherIcon from 'components/common/icons/WeatherIcon';

import * as S from './styles';

type Props = {
  city: City & Weather;
};

const WeatherDetails: React.FC<Props> = ({ city }): React.ReactElement => {
  const { t, i18n } = useTranslation();
  const unitsFormat = useContext(UnitsFormatContext);
  const tC = (key: string, options?: object): string =>
    t(`cities.selected.details.${key}`, options);
  const tS = (key: string, options?: object): string => t(`settings.unitsFormats.${key}`, options);

  const convertedTemp = convertTemp(city.weather.temp, unitsFormat);
  const convertedPressure = convertPressure(city.weather.pressure, unitsFormat);
  const convertedWindSpeed = convertSpeed(city.weather.wind.speed, unitsFormat);

  return (
    <S.WeatherDetailsWrapper>
      <S.Item>
        <S.ItemTitle>{tC('summary')}:</S.ItemTitle>
        <S.ItemDescription>
          {`${city.weather.summary}`}
          <span style={{ marginLeft: '0.3em' }}>
            <WeatherIcon icon={city.weather.weatherIcon} size="lg" />
          </span>
        </S.ItemDescription>

        <S.ItemTitle>{tC('temperature')}:</S.ItemTitle>
        <S.ItemDescription>{`${convertedTemp}${tS(`temp.${unitsFormat}`)}`}</S.ItemDescription>

        <S.ItemTitle>{tC('cloudiness')}:</S.ItemTitle>
        <S.ItemDescription>{`${city.weather.cloudiness}%`}</S.ItemDescription>

        <S.ItemTitle>{tC('wind')}:</S.ItemTitle>
        <S.ItemDescription>
          {`${convertedWindSpeed} ${tS(`speed.${unitsFormat}`)}, ${t(
            `wind.${city.weather.wind.cardDir}`,
          )}`}
          <span style={{ marginLeft: '0.3em' }}>
            <WeatherIcon wind icon={city.weather.wind.icon} size="lg" />
          </span>
        </S.ItemDescription>

        <S.ItemTitle>{tC('pressure')}:</S.ItemTitle>
        <S.ItemDescription>
          {`${convertedPressure}${tS(`pressure.${unitsFormat}`)}`}
        </S.ItemDescription>

        <S.ItemTitle>{tC('humidity')}:</S.ItemTitle>
        <S.ItemDescription>{`${city.weather.humidity}%`}</S.ItemDescription>

        <S.ItemTitle>{tC('daylightHours')}:</S.ItemTitle>
        <S.ItemDescription>
          {`${toHourMinutes(city.weather.sunrise, i18n.language)} — ${toHourMinutes(
            city.weather.sunset,
            i18n.language,
          )}`}
        </S.ItemDescription>

        <S.ItemTitle />
        <S.ItemDescription>
          {getDurationHourMinutes(
            city.weather.sunrise,
            city.weather.sunset,
            tC('hours'),
            tC('minutes'),
          )}
        </S.ItemDescription>
      </S.Item>
    </S.WeatherDetailsWrapper>
  );
};

export default WeatherDetails;
