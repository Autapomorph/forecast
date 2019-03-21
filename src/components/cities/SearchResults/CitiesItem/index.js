import React from 'react';

import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import generateCityName from '../../../../utils/cityData/generateCityName';

import {
  StyledCitiesItemWrapper,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledTitleButtonsWrapper,
} from './styles';

const CitiesItem = ({ city, isFeatured, fetchCity, addCityToFeatured, removeCityFromFeatured }) => (
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
