import React from 'react';

import { City as TCity, Weather } from 'models';
import Header from './Header';
import Current from './Current';
import Daily from './Daily';

import * as S from './styles';

type Props = {
  city: TCity & Weather;
  isFeatured: boolean;
  refetchWeather: () => void;
  addToFeatured: (city: TCity) => void;
  removeFromFeatured: (cityId: TCity['id']) => void;
};

const CityDetails = ({
  city,
  isFeatured,
  refetchWeather,
  addToFeatured,
  removeFromFeatured,
}: Props): React.ReactElement => (
  <S.CityWrapper>
    <Header
      city={city}
      isFeatured={isFeatured}
      refetchWeather={refetchWeather}
      addToFeatured={addToFeatured}
      removeFromFeatured={removeFromFeatured}
    />
    <Current city={city} />
    <Daily city={city} />
  </S.CityWrapper>
);

export default CityDetails;
