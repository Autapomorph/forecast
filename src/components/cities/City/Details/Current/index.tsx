import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { City, Weather } from 'models';
import UnitsFormatContext from 'context/unitsFormat';
import convertSpeed from 'utils/weather/wind';
import convertTemp from 'utils/weather/temperature';
import convertPressure from 'utils/weather/pressure';
import { toHourMinutes, getDurationHourMinutes } from 'utils/weather/time/converters';
import WeatherIcon from 'components/common/icons/WeatherIcon';
import MarginRightDelimeter from 'components/common/delimeters/MarginRight';

import * as S from './styles';

type Props = {
  city: City & Weather;
};

const CurrentDetails = ({ city }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation();
  const unitsFormat = useContext(UnitsFormatContext);
  const tC = (key: string, options?: object): string => t(`cities.city.details.${key}`, options);
  const tS = (key: string, options?: object): string => t(`settings.unitsFormats.${key}`, options);

  const convertedTemp = convertTemp(city.current.temp, unitsFormat);
  const convertedPressure = convertPressure(city.current.pressure, unitsFormat);
  const convertedWindSpeed = convertSpeed(city.current.wind.speed, unitsFormat);

  return (
    <S.CurrentWrapper>
      <S.Item>
        <S.ItemTitle>{`${tC('summary')}:`}</S.ItemTitle>
        <S.ItemDescription>
          {city.current.summary}
          <MarginRightDelimeter />
          <WeatherIcon icon={city.current.weatherIcon} style={{ fontSize: '1.33em' }} />
        </S.ItemDescription>

        <S.ItemTitle>{`${tC('temperature')}:`}</S.ItemTitle>
        <S.ItemDescription>{`${convertedTemp}${tS(`temp.${unitsFormat}`)}`}</S.ItemDescription>

        <S.ItemTitle>{`${tC('cloudiness')}:`}</S.ItemTitle>
        <S.ItemDescription>{`${city.current.cloudiness}%`}</S.ItemDescription>

        <S.ItemTitle>{`${tC('wind')}:`}</S.ItemTitle>
        <S.ItemDescription>
          {`${convertedWindSpeed} ${tS(`speed.${unitsFormat}`)}, ${t(
            `wind.${city.current.wind.cardDir}`,
          )}`}
          <MarginRightDelimeter />
          <WeatherIcon wind icon={city.current.wind.icon} style={{ fontSize: '1.33em' }} />
        </S.ItemDescription>

        <S.ItemTitle>{`${tC('pressure')}:`}</S.ItemTitle>
        <S.ItemDescription>
          {`${convertedPressure}${tS(`pressure.${unitsFormat}`)}`}
        </S.ItemDescription>

        <S.ItemTitle>{`${tC('humidity')}:`}</S.ItemTitle>
        <S.ItemDescription>{`${city.current.humidity}%`}</S.ItemDescription>

        <S.ItemTitle>{`${tC('daylightHours')}:`}</S.ItemTitle>
        <S.ItemDescription>
          {`${toHourMinutes(city.current.sunrise, i18n.language)} — ${toHourMinutes(
            city.current.sunset,
            i18n.language,
          )}`}
        </S.ItemDescription>

        <S.ItemTitle />
        <S.ItemDescription>
          {getDurationHourMinutes(
            city.current.sunrise,
            city.current.sunset,
            tC('hours'),
            tC('minutes'),
          )}
        </S.ItemDescription>
      </S.Item>
    </S.CurrentWrapper>
  );
};

export default CurrentDetails;
