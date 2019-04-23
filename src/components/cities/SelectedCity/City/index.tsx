import React from 'react';

import { ICity, IWeather } from 'models';
import CityHeader from '../CityHeader';
import WeatherDetails from '../WeatherDetails';
import ForecastDetails from '../ForecastDetails';

import { StyledCityWrapper } from './styles';

interface ICityProps {
  city: ICity & IWeather;
  isFeatured: boolean;
  refetchCityWeather: () => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const City: React.FC<ICityProps> = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <StyledCityWrapper>
    <CityHeader
      city={city}
      isFeatured={isFeatured}
      refetchCityWeather={refetchCityWeather}
      addCityToFeatured={addCityToFeatured}
      removeCityFromFeatured={removeCityFromFeatured}
    />
    <WeatherDetails city={city} />
    <ForecastDetails city={city} />
  </StyledCityWrapper>
);

export default City;
