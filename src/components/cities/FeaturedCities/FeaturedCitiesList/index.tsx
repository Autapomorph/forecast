import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { City, Coords } from 'models';
import FeaturedCity from '../FeaturedCity';

import { StyledFeaturedList } from './styles';

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
          <StyledFeaturedList ref={provided.innerRef}>{featuredCities}</StyledFeaturedList>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
};

export default FeaturedCitiesList;
