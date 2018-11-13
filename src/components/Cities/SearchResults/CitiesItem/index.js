import React from 'react';

import { UnitsFormatContext } from '../../../../store/settings/context';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import WeatherIcon from '../../../common/icons/WeatherIcon';
import convertTemp from '../../../../utils/cityData/temperature/tempConverter';
import convertSpeed from '../../../../utils/cityData/wind/speedConverter';

import {
  StyledCitiesItemWrapper,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledCitiesItemContent,
} from './styles';

const CitiesItem = ({
  city,
  isFeatured,
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <UnitsFormatContext.Consumer>
    {unitsFormat => {
      const convertedTemp = convertTemp(city.weather.temp, unitsFormat.temp.title);
      const convertedWindSpeed = convertSpeed(city.weather.windSpeed, unitsFormat.speed.title);

      return (
        <StyledCitiesItemWrapper>
          <StyledCitiesItemHeader>
            <StyledCitiesItemTitle onClick={() => fetchCityWeather(city.id)}>
              <span>{city.name}</span>
              <span>&nbsp;</span>
              <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
              <span>&nbsp;</span>
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
            <span>
              {city.weather.description} <WeatherIcon icon={city.weather.weatherIcon} />,
            </span>
            <span>&nbsp;</span>
            <span>{`${convertedTemp}${unitsFormat.temp.symbol},`}</span>
            <span>&nbsp;</span>
            <span>{`${convertedWindSpeed} ${unitsFormat.speed.symbol}`}</span>
            <span>&nbsp;</span>
            <WeatherIcon wind icon={city.weather.windIcon} />
          </StyledCitiesItemContent>
        </StyledCitiesItemWrapper>
      );
    }}
  </UnitsFormatContext.Consumer>
);

export default CitiesItem;
