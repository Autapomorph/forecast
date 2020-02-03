import React from 'react';
import { useTranslation } from 'react-i18next';

import { City, Weather } from 'models';
import generateName from 'utils/city/generateName';
import { toDayMonthHourMinutes } from 'utils/weather/time/coverters';
import Title from 'components/common/Title';
import CountryFlag from 'components/common/icons/CountryFlag';
import RetryButton from 'components/common/buttons/RetryButton';
import FeaturedButton from 'components/common/buttons/FeaturedButton';

import * as S from './styles';

type Props = {
  city: City & Weather;
  isFeatured: boolean;
  refetchWeather: () => void;
  addToFeatured: (city: City) => void;
  removeFromFeatured: (cityId: City['id']) => void;
};

const CityHeader = ({
  city,
  isFeatured,
  refetchWeather,
  addToFeatured,
  removeFromFeatured,
}: Props): React.ReactElement => {
  const { i18n } = useTranslation();

  return (
    <S.CityHeader>
      <Title>
        {`${generateName(city)} `}
        <CountryFlag country={city.countryCode.toLowerCase()} />
        <br />
        <Title.Subtitle>
          {toDayMonthHourMinutes(city.current.timestamp, i18n.language)}
        </Title.Subtitle>
      </Title>

      <S.TitleButtonsWrapper>
        <RetryButton onClick={refetchWeather} />
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
    </S.CityHeader>
  );
};

export default CityHeader;
