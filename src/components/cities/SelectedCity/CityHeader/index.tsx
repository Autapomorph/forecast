import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import Title from '../../../common/Title';
import RetryButton from '../../../common/buttons/RetryButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import { toDayMonthHourMinutes } from '../../../../utils/weatherData/time/coverters';
import generateCityName from '../../../../utils/cityData/generateCityName';
import { ICity, IWeather } from '../../../../models';

import { StyledCityHeader, StyledTitleButtonsWrapper } from './styles';

interface ICityHeaderProps extends WithTranslation {
  city: ICity & IWeather;
  isFeatured: boolean;
  refetchCityWeather: () => void;
  addCityToFeatured: (city: ICity) => void;
  removeCityFromFeatured: (cityId: ICity['id']) => void;
}

const CityHeader: React.FC<ICityHeaderProps> = ({
  i18n,
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}): React.ReactElement => (
  <StyledCityHeader>
    <Title>
      {`${generateCityName(city, i18n.language)} `}
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

export default withTranslation()(CityHeader);
