import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { City, Coords } from 'models';
import generateName from 'utils/city/generateName';
import CountryFlag from 'components/common/icons/CountryFlag';

import * as S from './styles';

type Props = {
  index: number;
  city: City;
  fetchCity: (coords: Coords) => void;
  removeFromFeatured: (cityId: City['id']) => void;
};

const FeaturedItem = ({
  index,
  city,
  fetchCity,
  removeFromFeatured,
}: Props): React.ReactElement => (
  <Draggable draggableId={city.id.toString()} index={index}>
    {(provided, snapshot) => (
      <S.FeaturedItemWrapper ref={provided.innerRef} {...provided.draggableProps}>
        <S.FeaturedItemReorderButton
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        />

        <S.FeaturedItemTitle onClick={() => fetchCity(city.coords)}>
          {`${generateName(city)} `}
          <CountryFlag country={city.countryCode.toLowerCase()} size="1.2em" />
        </S.FeaturedItemTitle>

        <S.FeaturedButton isFeatured onRemove={() => removeFromFeatured(city.id)} />
      </S.FeaturedItemWrapper>
    )}
  </Draggable>
);

export default FeaturedItem;
