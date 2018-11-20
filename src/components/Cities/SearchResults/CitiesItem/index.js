import React from 'react';
import { withNamespaces } from 'react-i18next';

import { UnitsFormatContext } from '../../../../store/settings/context';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature';
import convertSpeed from '../../../../utils/cityData/wind';

import {
  StyledCitiesItemWrapper,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledCitiesItemContent,
} from './styles';

const CitiesItem = ({
  t,
  city,
  isFeatured,
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat);
      const convertedWindSpeed = convertSpeed(city.weather.windSpeed, unitsFormat);

      return (
        <StyledCitiesItemWrapper>
          <StyledCitiesItemHeader>
            <StyledCitiesItemTitle onClick={() => fetchCityWeather(city.id)}>
              {`${city.name} `}
              <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
            </StyledCitiesItemTitle>

            <FeaturedButton
              isFeatured={isFeatured}
              onRemove={() => removeCityFromFeatured(city.id)}
              onAdd={() =>
                addCityToFeatured({
                  id: city.id,
                  name: city.name,
                  country: city.country,
                  coords: city.coords,
                })
              }
            />
          </StyledCitiesItemHeader>

          <StyledCitiesItemContent>
            <WeatherIcon icon={city.weather.weatherIcon} />
            {` ${city.weather.description}`}

            {`, ${convertedTemp}${t(`settings.unitsFormats.temp.${unitsFormat}`)}`}

            {`, ${convertedWindSpeed} ${t(`settings.unitsFormats.speed.${unitsFormat}`)} `}
            <WeatherIcon wind icon={city.weather.windIcon} />
          </StyledCitiesItemContent>
        </StyledCitiesItemWrapper>
      );
    }}
  </UnitsFormatContext.Consumer>
);

export default withNamespaces()(CitiesItem);
