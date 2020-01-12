import React from 'react';

import { City, Coords } from 'models';
import CitiesItem from '../CitiesItem';

import { StyledCitiesList } from './styles';

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
  <StyledCitiesList>
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
  </StyledCitiesList>
);

export default CitiesList;
