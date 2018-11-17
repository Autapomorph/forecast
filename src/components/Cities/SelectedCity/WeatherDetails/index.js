import React from 'react';
import { withNamespaces } from 'react-i18next';

import { UnitsFormatContext } from '../../../../store/settings/context';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature';
import convertPressure from '../../../../utils/cityData/pressure';
import convertSpeed from '../../../../utils/cityData/wind';

import {
  StyledWeatherDetailsWrapper,
  StyledWeatherDetailsItem as StyledItem,
  StyledWeatherDetailsItemTitle as StyledItemTitle,
  StyledWeatherDetailsItemDescription as StyledItemDescription,
} from './styles';

const WeatherDetails = ({ t, city }) => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const cityDetailsLang = 'cities.selected.details';
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat.temp.title);
      const convertedPressure = convertPressure(city.weather.pressure, unitsFormat.pressure.title);
      const convertedWindSpeed = convertSpeed(city.weather.windSpeed, unitsFormat.speed.title);

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
              {`${convertedTemp}${unitsFormat.temp.symbol}`}
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.cloudiness`)}:</StyledItemTitle>
            <StyledItemDescription>{`${city.weather.cloudiness}%`}</StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.wind`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${convertedWindSpeed} ${unitsFormat.speed.symbol}, ${t(
                `wind.${city.weather.windCardDir}`,
              )} `}
              <WeatherIcon wind icon={city.weather.windIcon} size="lg" />
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.pressure`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${convertedPressure}${unitsFormat.pressure.symbol}`}
            </StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.humidity`)}:</StyledItemTitle>
            <StyledItemDescription>{`${city.weather.humidity}%`}</StyledItemDescription>

            <StyledItemTitle>{t(`${cityDetailsLang}.daytime`)}:</StyledItemTitle>
            <StyledItemDescription>
              {`${city.weather.sunrise} — ${city.weather.sunset}`}
            </StyledItemDescription>
          </StyledItem>
        </StyledWeatherDetailsWrapper>
      );
    }}
  </UnitsFormatContext.Consumer>
);

export default withNamespaces()(WeatherDetails);
