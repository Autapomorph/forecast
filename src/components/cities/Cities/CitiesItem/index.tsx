import React from 'react';

import { City, Coords } from 'models';
import generateName from 'utils/city/generateName';
import FeaturedButton from 'components/common/buttons/FeaturedButton';
import CountryFlag from 'components/common/icons/CountryFlag';

import * as S from './styles';

type Props = {
  city: City;
  isFeatured: boolean;
  fetchCity: (cityCoords: Coords) => void;
  addToFeatured: (city: City) => void;
  removeFromFeatured: (cityId: City['id']) => void;
};

const CitiesItem = ({
  city,
  isFeatured,
  fetchCity,
  addToFeatured,
  removeFromFeatured,
}: Props): React.ReactElement => (
  <S.CitiesItemWrapper>
    <S.CitiesItemHeader>
      <S.CitiesItemTitle onClick={() => fetchCity(city.coords)}>
        <span style={{ marginRight: '0.3em' }}>{`${generateName(city)}`}</span>
        <CountryFlag country={city.countryCode.toLowerCase()} size="1.2em" />
      </S.CitiesItemTitle>

      <S.TitleButtonsWrapper>
        <FeaturedButton
          isFeatured={isFeatured}
          onRemove={() => removeFromFeatured(city.id)}
          onAdd={() =>
            addToFeatured({
              id: city.id,
              name: city.name,
              region: city.region,
              countryName: city.countryName,
              countryCode: city.countryCode,
              coords: city.coords,
            })
          }
        />
      </S.TitleButtonsWrapper>
    </S.CitiesItemHeader>
  </S.CitiesItemWrapper>
);

export default CitiesItem;
