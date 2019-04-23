import React from 'react';

import { ICity, ICoords } from 'models';
import CitiesItem from '../CitiesItem';

import { StyledCitiesList } from './styles';

interface ICitiesListProps {
  cities: ICity[];
  checkIfFeatured: (cityId: ICity['id']) => boolean;
  fetchCity: (cityCoords: ICoords) => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const CitiesList: React.FC<ICitiesListProps> = ({
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
