import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICity, IWeather } from 'models';
import generateCityName from 'utils/cityData/generateCityName';
import { toDayMonthHourMinutes } from 'utils/weatherData/time/coverters';
import Title from 'components/common/Title';
import CountryFlag from 'components/common/icons/CountryFlag';
import RetryButton from 'components/common/buttons/RetryButton';
import FeaturedButton from 'components/common/buttons/FeaturedButton';

import { StyledCityHeader, StyledTitleButtonsWrapper } from './styles';

interface ICityHeaderProps {
  city: ICity & IWeather;
  isFeatured: boolean;
  refetchCityWeather: () => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const CityHeader: React.FC<ICityHeaderProps> = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => {
  const { i18n } = useTranslation();

  return (
    <StyledCityHeader>
      <Title>
        {`${generateCityName(city)} `}
        <CountryFlag country={city.country.toLowerCase()} />

        <br />
        <Title.Subtitle>
          {toDayMonthHourMinutes(city.weather.timestamp, i18n.language)}
        </Title.Subtitle>
      </Title>

      <StyledTitleButtonsWrapper>
        <RetryButton onClick={refetchCityWeather} size="lg" />
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
    </StyledCityHeader>
  );
};

export default CityHeader;
