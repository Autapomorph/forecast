import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { RootState } from 'store/types';
import {
  getGeoPosition,
  getSelectedCity,
  getIsSelectedCityActive,
  getIsAnythingLoading,
  getSelectedCityErrorMessage,
  getIsFeaturedCity,
  getCurrentUnitsFormat,
} from 'store/rootSelectors';
import {
  fetchCityWeatherByPosition,
  addCityToFeatured,
  removeCityFromFeatured,
} from 'store/cities/actions';
import { UnitsFormatContext } from 'store/settings/context';
import Loader from 'components/common/messages/Loader';
import Message from 'components/common/messages/Message';
import City from './City';

import { StyledSelectedCitySection } from './styles';

type Props = ConnectedProps<typeof connector>;

export const SelectedCity: React.FC<Props> = ({
  geoPosition,
  city,
  isActive,
  isLoading,
  errorMessage,
  checkIfFeatured,
  unitsFormat,
  _fetchCityWeatherByPosition,
  _addCityToFeatured,
  _removeCityFromFeatured,
}): React.ReactElement | null => {
  const { t } = useTranslation();
  const toastId = 'cityError';

  useEffect(() => {
    if (geoPosition) {
      _fetchCityWeatherByPosition(geoPosition);
    }
  }, [geoPosition, _fetchCityWeatherByPosition]);

  useEffect(() => {
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId,
        autoClose: false,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(toastId);
    }
  });

  if (!isActive) {
    return null;
  }

  if (isLoading) {
    return (
      <StyledSelectedCitySection isLoading>
        <Loader />
      </StyledSelectedCitySection>
    );
  }

  if (!city) {
    return null;
  }

  if (errorMessage) {
    return (
      <StyledSelectedCitySection>
        <Message>¯\_(ツ)_/¯</Message>
      </StyledSelectedCitySection>
    );
  }

  return (
    <StyledSelectedCitySection>
      <UnitsFormatContext.Provider value={unitsFormat}>
        <City
          city={city}
          isFeatured={checkIfFeatured(city.id)}
          refetchCityWeather={() => _fetchCityWeatherByPosition(city.coords)}
          addCityToFeatured={_addCityToFeatured}
          removeCityFromFeatured={_removeCityFromFeatured}
        />
      </UnitsFormatContext.Provider>
    </StyledSelectedCitySection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  geoPosition: getGeoPosition(state),
  city: getSelectedCity(state),
  isActive: getIsSelectedCityActive(state),
  isLoading: getIsAnythingLoading(state),
  errorMessage: getSelectedCityErrorMessage(state),
  checkIfFeatured: getIsFeaturedCity(state),
  unitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatch = {
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

const connector = connect(mapState, mapDispatch);
export default connector(SelectedCity);
