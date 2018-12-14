import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import CountryFlag from '../../../common/icons/CountryFlag';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityTitle,
  StyledFeaturedCityReorderButton,
  StyledFeaturedButton,
} from './styles';

const FeaturedCitiesItem = ({ index, city, fetchCity, removeCityFromFeatured }) => (
  <Draggable draggableId={city.id} index={index}>
    {(provided, snapshot) => (
      <StyledFeaturedCityWrapper ref={provided.innerRef} {...provided.draggableProps}>
        <StyledFeaturedCityReorderButton
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        />

        <StyledFeaturedCityTitle onClick={() => fetchCity(city.id)}>
          {`${city.name} `}
          <CountryFlag country={city.country.toLowerCase()} size="1.2rem" />
        </StyledFeaturedCityTitle>

        <StyledFeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
      </StyledFeaturedCityWrapper>
    )}
  </Draggable>
);

export default FeaturedCitiesItem;
