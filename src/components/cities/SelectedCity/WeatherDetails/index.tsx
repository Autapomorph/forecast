import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { ICity, IWeather } from 'models';
import { UnitsFormatContext } from 'store/settings/context';
import convertSpeed from 'utils/weatherData/wind';
import convertTemp from 'utils/weatherData/temperature';
import convertPressure from 'utils/weatherData/pressure';
import { toHourMinutes } from 'utils/weatherData/time/coverters';
import WeatherIcon from 'components/common/icons/WeatherIcon';

import {
  StyledWeatherDetailsWrapper,
  StyledWeatherDetailsItem as StyledItem,
  StyledWeatherDetailsItemTitle as StyledItemTitle,
  StyledWeatherDetailsItemDescription as StyledItemDescription,
} from './styles';

interface IWeatherDetailsProps extends WithTranslation {
  city: ICity & IWeather;
}

const WeatherDetails: React.FC<IWeatherDetailsProps> = ({ t, i18n, city }): React.ReactElement => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const cityDetailsLang = 'cities.selected.details';
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat);
      const convertedPressure = convertPressure(city.weather.pressure, unitsFormat);
      const convertedWindSpeed = convertSpeed(city.weather.wind.speed, unitsFormat);

      return (
        <StyledWeatherDetailsWrapper>
          <StyledItem>
            <StyledItemTitle>{t(`${cityDetailsLang}.summary`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${city.weather.summary} `}
              <WeatherIcon icon={city.weather.weatherIcon} size="lg" />
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.temperature`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${convertedTemp}${t(`settings.unitsFormats.temp.${unitsFormat}`)}`}
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.cloudiness`)}:</StyledItemTitle>
            <StyledItemDescription>{`${city.weather.cloudiness}%`}</StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.wind`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${convertedWindSpeed} ${t(`settings.unitsFormats.speed.${unitsFormat}`)}, ${t(
                `wind.${city.weather.wind.cardDir}`,
              )}, `}
              <WeatherIcon wind icon={city.weather.wind.icon} size="lg" />
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.pressure`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${convertedPressure}${t(`settings.unitsFormats.pressure.${unitsFormat}`)}`}
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.humidity`)}:</StyledItemTitle>
            <StyledItemDescription>{`${city.weather.humidity}%`}</StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.daytime`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${toHourMinutes(city.weather.sunrise, i18n.language)} — ${toHourMinutes(
                city.weather.sunset,
                i18n.language,
              )}`}
            </StyledItemDescription>
          </StyledItem>
        </StyledWeatherDetailsWrapper>
      );
    }}
  </UnitsFormatContext.Consumer>
);

export default withTranslation()(WeatherDetails);
