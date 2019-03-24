import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import FeaturedCity from '../FeaturedCity';
import { ICity, ICoords } from '../../../../models';

import { StyledFeaturedList } from './styles';

interface IFeaturedCitiesListProps {
  cities: ICity[];
  fetchCity: (coords: ICoords) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const FeaturedCitiesList: React.FC<IFeaturedCitiesListProps> = ({
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
