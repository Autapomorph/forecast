import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import generateCityName from '../../../../utils/cityData/generateCityName';
import { ICity, ICoords } from '../../../../models';

import {
  StyledCitiesItemWrapper,
  StyledCitiesItemHeader,
  StyledCitiesItemTitle,
  StyledTitleButtonsWrapper,
} from './styles';

interface ICitiesItemProps extends WithTranslation {
  city: ICity;
  isFeatured: boolean;
  fetchCity: (cityCoords: ICoords) => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const CitiesItem: React.FC<ICitiesItemProps> = ({
  i18n,
  city,
  isFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <StyledCitiesItemWrapper>
    <StyledCitiesItemHeader>
      <StyledCitiesItemTitle onClick={() => fetchCity(city.coords)}>
        {`${generateCityName(city, i18n.language)} `}
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

export default withTranslation()(CitiesItem);
