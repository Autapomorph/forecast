import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import FeaturedCity from '../FeaturedCity';

import { StyledFeaturedList } from './styles';

const FeaturedCitiesList = ({ cities, fetchCity, removeCityFromFeatured }) => {
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
        <StyledFeaturedList ref={provided.innerRef}>{featuredCities}</StyledFeaturedList>
      )}
    </Droppable>
  );
};

export default FeaturedCitiesList;
