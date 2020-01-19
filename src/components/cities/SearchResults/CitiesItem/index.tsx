import React from 'react';

import { City, Coords } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import FeaturedButton from 'components/common/buttons/FeaturedButton';
import CountryFlag from 'components/common/icons/CountryFlag';

import * as S from './styles';

type Props = {
  city: City;
  isFeatured: boolean;
  fetchCity: (cityCoords: Coords) => void;
  addCityToFeatured: (city: City) => void;
  removeCityFromFeatured: (cityId: City['id']) => void;
};

const CitiesItem: React.FC<Props> = ({
  city,
  isFeatured,
  fetchCity,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <S.CitiesItemWrapper>
    <S.CitiesItemHeader>
      <S.CitiesItemTitle onClick={() => fetchCity(city.coords)}>
        {`${generateCityName(city)} `}
        <CountryFlag country={city.country.toLowerCase()} size="1.2em" />
      </S.CitiesItemTitle>

      <S.TitleButtonsWrapper>
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
      </S.TitleButtonsWrapper>
    </S.CitiesItemHeader>
  </S.CitiesItemWrapper>
);

export default CitiesItem;
