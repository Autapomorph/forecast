import React from 'react';

import { City, Coords } from 'models';
import CitiesItem from '../CitiesItem';

import * as S from './styles';

type Props = {
  cities: City[];
  checkIfFeatured: (cityId: City['id']) => boolean;
  fetchCity: (cityCoords: Coords) => void;
  addToFeatured: (city: City) => void;
  removeFromFeatured: (cityId: City['id']) => void;
};

const CitiesList = ({
  cities,
  checkIfFeatured,
  fetchCity,
  addToFeatured,
  removeFromFeatured,
}: Props): React.ReactElement => (
  <S.CitiesList>
    {Object.values(cities).map(city => (
      <CitiesItem
        key={city.id}
        city={city}
        isFeatured={checkIfFeatured(city.id)}
        fetchCity={fetchCity}
        addToFeatured={addToFeatured}
        removeFromFeatured={removeFromFeatured}
      />
    ))}
  </S.CitiesList>
);

export default CitiesList;
