import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { City, Coords } from 'models';
import FeaturedItem from '../FeaturedItem';

import * as S from './styles';

type Props = {
  cities: City[];
  fetchCity: (coords: Coords) => void;
  removeFromFeatured: (cityId: City['id']) => void;
};

const FeaturedList = ({ cities, fetchCity, removeFromFeatured }: Props): React.ReactElement => {
  const citiesItems = cities.map((city, index) => (
    <FeaturedItem
      key={city.id}
      index={index}
      city={city}
      fetchCity={fetchCity}
      removeFromFeatured={removeFromFeatured}
    />
  ));

  return (
    <Droppable droppableId="featured">
      {provided => (
        <>
          <S.FeaturedList ref={provided.innerRef}>{citiesItems}</S.FeaturedList>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
};

export default FeaturedList;
