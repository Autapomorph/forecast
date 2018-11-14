import React from 'react';

import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import WeatherIcon from '../../../common/icons/WeatherIcon';

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
      {`${city.weather.description} `}
      <WeatherIcon icon={city.weather.weatherIcon} />

      {`, ${city.weather.temp} ℃,`}

      {` ${city.weather.windSpeed} м/с `}
      <WeatherIcon wind icon={city.weather.windIcon} />
    </StyledCitiesItemContent>
  </StyledCitiesItemWrapper>
);

export default CitiesItem;
