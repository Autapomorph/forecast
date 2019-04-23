import React from 'react';

import { ICity, ICoords } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import FeaturedButton from 'components/common/buttons/FeaturedButton';
import CountryFlag from 'components/common/icons/CountryFlag';

import {
  StyledCitiesItemWrapper,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledTitleButtonsWrapper,
} from './styles';

interface ICitiesItemProps {
  city: ICity;
  isFeatured: boolean;
  fetchCity: (cityCoords: ICoords) => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const CitiesItem: React.FC<ICitiesItemProps> = ({
  city,
  isFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <StyledCitiesItemWrapper>
    <StyledCitiesItemHeader>
      <StyledCitiesItemTitle onClick={() => fetchCity(city.coords)}>
        {`${generateCityName(city)} `}
        <CountryFlag country={city.country.toLowerCase()} size="1.2em" />
      </StyledCitiesItemTitle>

      <StyledTitleButtonsWrapper>
        <FeaturedButton
          isFeatured={isFeatured}
          onRemove={() => removeCityFromFeatured(city.id)}
          onAdd={() =>
            addCityToFeatured({
              id: city.id,
              name: city.name,
              region: city.region,
              country: city.country,
              coords: city.coords,
            })
          }
        />
      </StyledTitleButtonsWrapper>
    </StyledCitiesItemHeader>
  </StyledCitiesItemWrapper>
);

export default CitiesItem;
