import React from 'react';
import { withNamespaces } from 'react-i18next';

import { UnitsFormatContext } from '../../../../store/settings/context';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature';
import convertPressure from '../../../../utils/cityData/pressure';
import convertSpeed from '../../../../utils/cityData/wind';
import { toHourMinutes } from '../../../../utils/cityData/time/coverters';

import {
  StyledWeatherDetailsWrapper,
  StyledWeatherDetailsItem as StyledItem,
  StyledWeatherDetailsItemTitle as StyledItemTitle,
  StyledWeatherDetailsItemDescription as StyledItemDescription,
} from './styles';

const WeatherDetails = ({ t, i18n, city }) => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const cityDetailsLang = 'cities.selected.details';
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat);
      const convertedPressure = convertPressure(city.weather.pressure, unitsFormat);
      const convertedWindSpeed = convertSpeed(city.weather.windSpeed, unitsFormat);

      return (
        <StyledWeatherDetailsWrapper>
          <StyledItem>
            <StyledItemTitle>{t(`${cityDetailsLang}.description`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${city.weather.description} `}
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
                `wind.${city.weather.windCardDir}`,
              )}, `}
              <WeatherIcon wind icon={city.weather.windIcon} size="lg" />
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

export default withNamespaces()(WeatherDetails);
