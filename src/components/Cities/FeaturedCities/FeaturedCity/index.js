import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import ReorderButton from '../../../common/buttons/ReorderButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityHeader,
  StyledFeaturedCityTitle,
} from './styles';

const FeaturedCitiesItem = ({ index, city, fetchCity, removeCityFromFeatured }) => (
  <Draggable draggableId={city.id} index={index}>
    {(provided, snapshot) => (
      <StyledFeaturedCityWrapper ref={provided.innerRef} {...provided.draggableProps}>
        <StyledFeaturedCityHeader>
          <div>
            <ReorderButton isDragging={snapshot.isDragging} {...provided.dragHandleProps} />

            <StyledFeaturedCityTitle onClick={() => fetchCity(city.id)}>
              {`${city.name} `}
              <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
            </StyledFeaturedCityTitle>
          </div>

          <FeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
        </StyledFeaturedCityHeader>
      </StyledFeaturedCityWrapper>
    )}
  </Draggable>
);

export default FeaturedCitiesItem;
