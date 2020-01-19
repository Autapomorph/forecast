import React from 'react';

import { City, Coords } from 'models';
import CitiesItem from '../CitiesItem';

import * as S from './styles';

type Props = {
  cities: City[];
  checkIfFeatured: (cityId: City['id']) => boolean;
  fetchCity: (cityCoords: Coords) => void;
  addCityToFeatured: (city: City) => void;
  removeCityFromFeatured: (cityId: City['id']) => void;
};

const CitiesList: React.FC<Props> = ({
  cities,
  checkIfFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <S.CitiesList>
    {Object.values(cities).map(city => (
      <CitiesItem
        key={city.id}
        city={city}
        isFeatured={checkIfFeatured(city.id)}
        fetchCity={fetchCity}
        addCityToFeatured={addCityToFeatured}
        removeCityFromFeatured={removeCityFromFeatured}
      />
    ))}
  </S.CitiesList>
);

export default CitiesList;
