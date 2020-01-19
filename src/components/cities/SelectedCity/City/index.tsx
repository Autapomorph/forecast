import React from 'react';

import { City as TCity, Weather } from 'models';
import CityHeader from '../CityHeader';
import WeatherDetails from '../WeatherDetails';
import ForecastDetails from '../ForecastDetails';

import * as S from './styles';

type Props = {
  city: TCity & Weather;
  isFeatured: boolean;
  refetchCityWeather: () => void;
  addCityToFeatured: (city: TCity) => void;
  removeCityFromFeatured: (cityId: TCity['id']) => void;
};

const City: React.FC<Props> = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <S.CityWrapper>
    <CityHeader
      city={city}
      isFeatured={isFeatured}
      refetchCityWeather={refetchCityWeather}
      addCityToFeatured={addCityToFeatured}
      removeCityFromFeatured={removeCityFromFeatured}
    />
    <WeatherDetails city={city} />
    <ForecastDetails city={city} />
  </S.CityWrapper>
);

export default City;
