import React from 'react';

import { City as TCity, Weather } from 'models';
import CityHeader from './CityHeader';
import CurrentDetails from './CurrentDetails';
import DailyDetails from './DailyDetails';

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
    <CityHeader
      city={city}
      isFeatured={isFeatured}
      refetchWeather={refetchWeather}
      addToFeatured={addToFeatured}
      removeFromFeatured={removeFromFeatured}
    />
    <CurrentDetails city={city} />
    <DailyDetails city={city} />
  </S.CityWrapper>
);

export default CityDetails;
