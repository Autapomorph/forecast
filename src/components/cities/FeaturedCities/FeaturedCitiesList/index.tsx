import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { ICity, ICoords } from 'models';
import FeaturedCity from '../FeaturedCity';

import { StyledFeaturedList } from './styles';

interface IProps {
  cities: ICity[];
  fetchCity: (coords: ICoords) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const FeaturedCitiesList: React.FC<IProps> = ({
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
