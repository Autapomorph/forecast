import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import CountryFlag from '../../../common/icons/CountryFlag';
import generateCityName from '../../../../utils/cityData/generateCityName';
import { ICity, ICoords } from '../../../../models';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityTitle,
  StyledFeaturedCityReorderButton,
  StyledFeaturedButton,
} from './styles';

interface IFeaturedCitiesItemProps {
  index: number;
  city: ICity;
  fetchCity: (coords: ICoords) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const FeaturedCitiesItem: React.FC<IFeaturedCitiesItemProps> = ({
  index,
  city,
  fetchCity,
  removeCityFromFeatured,
}): React.ReactElement => (
  <Draggable draggableId={city.id.toString()} index={index}>
    {(provided, snapshot) => (
      <StyledFeaturedCityWrapper ref={provided.innerRef} {...provided.draggableProps}>
        // @ts-ignore
        <StyledFeaturedCityReorderButton
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        />
        <StyledFeaturedCityTitle onClick={() => fetchCity(city.coords)}>
          {`${generateCityName(city)} `}
          <CountryFlag country={city.country.toLowerCase()} size="1.2em" />
        </StyledFeaturedCityTitle>
        // @ts-ignore
        <StyledFeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
      </StyledFeaturedCityWrapper>
    )}
  </Draggable>
);

export default FeaturedCitiesItem;
