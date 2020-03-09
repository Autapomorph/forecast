import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'store/types';
import {
  getGeoPosition,
  getCity,
  getIsCityActive,
  getIsAnythingLoading,
  getCityErrorMessage,
  getIsFeatured,
  getCurrentUnitsFormat,
} from 'store/rootSelectors';
import { fetchWeatherByPosition, addToFeatured, removeFromFeatured } from 'store/cities/actions';
import UnitsFormatContext from 'context/unitsFormat';
import Loader from 'components/common/messages/Loader';
import Message from 'components/common/messages/Base';
import useToast from 'utils/hooks/useToast';
import Details from './Details';

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const City = ({
  geoPosition,
  city,
  isActive,
  isLoading,
  errorMessage,
  checkIfFeatured,
  unitsFormat,
  _fetchWeatherByPosition,
  _addToFeatured,
  _removeFromFeatured,
}: Props): React.ReactElement | null => {
  useToast({
    toastId: 'cityError',
    autoClose: false,
    isLoading,
    errorMessage,
  });

  useEffect(() => {
    if (geoPosition) {
      _fetchWeatherByPosition(geoPosition);
    }
  }, [geoPosition, _fetchWeatherByPosition]);

  if (!isActive) {
    return null;
  }

  if (isLoading) {
    return (
      <S.CitySection isLoading>
        <Loader />
      </S.CitySection>
    );
  }

  if (!city) {
    return null;
  }

  if (errorMessage) {
    return (
      <S.CitySection>
        <Message>¯\_(ツ)_/¯</Message>
      </S.CitySection>
    );
  }

  return (
    <S.CitySection>
      <UnitsFormatContext.Provider value={unitsFormat}>
        <Details
          city={city}
          isFeatured={checkIfFeatured(city.id)}
          refetchWeather={() => _fetchWeatherByPosition(city.coords)}
          addToFeatured={_addToFeatured}
          removeFromFeatured={_removeFromFeatured}
        />
      </UnitsFormatContext.Provider>
    </S.CitySection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  geoPosition: getGeoPosition(state),
  city: getCity(state),
  isActive: getIsCityActive(state),
  isLoading: getIsAnythingLoading(state),
  errorMessage: getCityErrorMessage(state),
  checkIfFeatured: getIsFeatured(state),
  unitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatch = {
  _fetchWeatherByPosition: fetchWeatherByPosition,
  _addToFeatured: addToFeatured,
  _removeFromFeatured: removeFromFeatured,
};

const connector = connect(mapState, mapDispatch);
export default connector(City);
