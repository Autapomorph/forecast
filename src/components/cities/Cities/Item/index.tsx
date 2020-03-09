import React from 'react';

import { City, Coords } from 'models';
import generateName from 'utils/city/generateName';
import FeaturedButton from 'components/common/buttons/Featured';
import CountryFlag from 'components/common/icons/CountryFlag';
import MarginRightDelimeter from 'components/common/delimeters/MarginRight';

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
    <S.CitiesItemTitle onClick={() => fetchCity(city.coords)}>
      <span>{`${generateName(city)}, `}</span>
      <span style={{ whiteSpace: 'nowrap' }}>
        {city.countryName}
        <MarginRightDelimeter />
        <CountryFlag country={city.countryCode.toLowerCase()} />
      </span>
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
  </S.CitiesItemWrapper>
);

export default CitiesItem;
