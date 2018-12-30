import React from 'react';
import { withNamespaces } from 'react-i18next';

import Title from '../../../common/Title';
import RetryButton from '../../../common/buttons/RetryButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import { toDayMonthHourMinutes } from '../../../../utils/cityData/time/coverters';

import { StyledCityHeader, StyledTitleButtonsWrapper } from './styles';

const CityHeader = ({
  i18n,
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCityHeader>
    <Title>
      {`${city.name} `}
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
            country: city.country,
            coords: city.coords,
          })
        }
      />
    </StyledTitleButtonsWrapper>
  </StyledCityHeader>
);

export default withNamespaces()(CityHeader);
