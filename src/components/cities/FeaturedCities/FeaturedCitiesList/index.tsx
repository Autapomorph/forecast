import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { City, Coords } from 'models';
import FeaturedCity from '../FeaturedCity';

import * as S from './styles';

type Props = {
  cities: City[];
  fetchCity: (coords: Coords) => void;
  removeCityFromFeatured: (cityId: City['id']) => void;
};

const FeaturedCitiesList: React.FC<Props> = ({
  cities,
  fetchCity,
  removeCityFromFeatured,
}): React.ReactElement => {
  const featuredCities = cities.map((city, index) => (
    <FeaturedCity
      key={city.id}
      index={index}
      city={city}
      fetchCity={fetchCity}
      removeCityFromFeatured={removeCityFromFeatured}
    />
  ));

  return (
    <Droppable droppableId="featured-cities">
      {provided => (
        <>
          <S.FeaturedList ref={provided.innerRef}>{featuredCities}</S.FeaturedList>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
};

export default FeaturedCitiesList;
