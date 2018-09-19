import React from 'react';

import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import WeatherIcon from '../../../common/icons/WeatherIcon';

import {
  StyledCitiesItem,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledCitiesItemContent,
} from './styles';

const CitiesItem = ({ city, isFeatured, fetchCity, addCityToFeatured, removeCityFromFeatured }) => (
  <StyledCitiesItem>
    <StyledCitiesItemHeader>
      <StyledCitiesItemTitle onClick={() => fetchCity(city.id)}>
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
      <span>
        {city.weather.temp}
        &#8451;,
      </span>
      <span>&nbsp;</span>
      <span>
        ветер {city.weather.windSpeed} м/с <WeatherIcon wind icon={city.weather.windIcon} />
      </span>
    </StyledCitiesItemContent>
  </StyledCitiesItem>
);

export default CitiesItem;
