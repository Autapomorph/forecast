import React from 'react';
import { useTranslation } from 'react-i18next';

import { City, Weather } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import { toDayMonthHourMinutes } from 'utils/weatherData/time/coverters';
import Title from 'components/common/Title';
import CountryFlag from 'components/common/icons/CountryFlag';
import RetryButton from 'components/common/buttons/RetryButton';
import FeaturedButton from 'components/common/buttons/FeaturedButton';

import * as S from './styles';

type Props = {
  city: City & Weather;
  isFeatured: boolean;
  refetchCityWeather: () => void;
  addCityToFeatured: (city: City) => void;
  removeCityFromFeatured: (cityId: City['id']) => void;
};

const CityHeader: React.FC<Props> = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => {
  const { i18n } = useTranslation();

  return (
    <S.CityHeader>
      <Title>
        {`${generateCityName(city)} `}
        <CountryFlag country={city.country.toLowerCase()} />

        <br />
        <Title.Subtitle>
          {toDayMonthHourMinutes(city.weather.timestamp, i18n.language)}
        </Title.Subtitle>
      </Title>

      <S.TitleButtonsWrapper>
        <RetryButton onClick={refetchCityWeather} />
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
    </S.CityHeader>
  );
};

export default CityHeader;
