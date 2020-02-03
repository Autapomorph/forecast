import React, { useContext, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { City, Weather } from 'models';
import { UnitsFormatContext } from 'store/settings/context';
import convertSpeed from 'utils/weather/wind';
import convertTemp from 'utils/weather/temperature';
import convertPressure from 'utils/weather/pressure';
import { toDayMonth, toHourMinutes } from 'utils/weather/time/coverters';
import WeatherIcon from 'components/common/icons/WeatherIcon';

import * as S from './styles';

type Props = {
  city: City & Weather;
};

const DailyDetails = ({ city }: Props): React.ReactElement => {
  const unitsFormat = useContext(UnitsFormatContext);
  const { t, i18n } = useTranslation();
  const tS = (key: string, options?: object): string => t(`settings.unitsFormats.${key}`, options);

  const descriptionElements = useRef(city.daily.map(() => React.createRef<HTMLDivElement>()));
  useLayoutEffect(() => {
    const summaryHeights = descriptionElements.current.map(el => el.current?.offsetHeight ?? 0);
    const maxSummaryHeight = Math.max(...summaryHeights);
    descriptionElements.current.forEach(el => {
      const { current } = el;
      if (current) {
        current.style.height = `${maxSummaryHeight}px`;
      }
    });
  }, [descriptionElements]);

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
        {city.daily.map((day, index) => {
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
                <S.Description ref={descriptionElements.current[index]}>
                  {day.summary}
                </S.Description>
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

export default DailyDetails;
