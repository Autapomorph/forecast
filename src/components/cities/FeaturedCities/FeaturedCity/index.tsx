import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { City, Coords } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import CountryFlag from 'components/common/icons/CountryFlag';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityTitle,
  StyledFeaturedCityReorderButton,
  StyledFeaturedButton,
} from './styles';

type Props = {
  index: number;
  city: City;
  fetchCity: (coords: Coords) => void;
  removeCityFromFeatured: (cityId: City['id']) => void;
};

const FeaturedCitiesItem: React.FC<Props> = ({
  index,
  city,
  fetchCity,
  removeCityFromFeatured,
}): React.ReactElement => (
  <Draggable draggableId={city.id.toString()} index={index}>
    {(provided, snapshot) => (
      <StyledFeaturedCityWrapper ref={provided.innerRef} {...provided.draggableProps}>
        <StyledFeaturedCityReorderButton
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        />

        <StyledFeaturedCityTitle onClick={() => fetchCity(city.coords)}>
          {`${generateCityName(city)} `}
          <CountryFlag country={city.country.toLowerCase()} size="1.2em" />
        </StyledFeaturedCityTitle>

        <StyledFeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
      </StyledFeaturedCityWrapper>
    )}
  </Draggable>
);

export default FeaturedCitiesItem;
