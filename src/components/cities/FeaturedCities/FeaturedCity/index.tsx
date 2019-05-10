import React, { Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ICity, ICoords } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import CountryFlag from 'components/common/icons/CountryFlag';

import {
  StyledFeaturedCityWrapper,
  StyledFeaturedCityTitle,
  StyledFeaturedCityReorderButton,
  StyledFeaturedButton,
} from './styles';

interface IProps {
  index: number;
  city: ICity;
  fetchCity: (coords: ICoords) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const FeaturedCitiesItem: React.FC<IProps> = ({
  index,
  city,
  fetchCity,
  removeCityFromFeatured,
}): React.ReactElement => (
  <Draggable draggableId={city.id.toString()} index={index}>
    {(provided, snapshot) => (
      <StyledFeaturedCityWrapper ref={provided.innerRef} {...provided.draggableProps}>
        <Fragment>
          {
            // @ts-ignore
            <StyledFeaturedCityReorderButton
              isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}
            />
          }
        </Fragment>

        <StyledFeaturedCityTitle onClick={() => fetchCity(city.coords)}>
          {`${generateCityName(city)} `}
          <CountryFlag country={city.country.toLowerCase()} size="1.2em" />
        </StyledFeaturedCityTitle>

        <Fragment>
          {
            // @ts-ignore
            <StyledFeaturedButton isFeatured onRemove={() => removeCityFromFeatured(city.id)} />
          }
        </Fragment>
      </StyledFeaturedCityWrapper>
    )}
  </Draggable>
);

export default FeaturedCitiesItem;
