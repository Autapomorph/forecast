import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import useMount from 'react-use/lib/useMount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { RootState } from 'store/types';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from 'store/rootSelectors';
import { fetchGeolocation, fetchGeolocationByIP } from 'store/geolocation/actions';
import checkGeolocationPermission from 'utils/geolocation/checkPermission';
import useToast from 'utils/hooks/useToast';

import * as S from 'components/SearchBar/styles';

type Props = ConnectedProps<typeof connector> & {
  onClick?: () => void;
};

export const GeolocationButton = ({
  isLoading,
  errorMessage,
  onClick,
  _fetchGeolocation,
  _fetchGeolocationByIP,
}: Props): React.ReactElement => {
  useToast({
    toastId: 'geoError',
    isLoading,
    errorMessage,
  });

  useMount(() => {
    checkGeolocationPermission()
      .then(_fetchGeolocation)
      .catch(_fetchGeolocationByIP);
  });

  const handleClick = (): void => {
    _fetchGeolocation();
    // eslint-disable-next-line no-unused-expressions
    onClick?.();
  };

  return (
    <S.InputButton disabled={isLoading} onClick={handleClick}>
      <FontAwesomeIcon icon={faLocationArrow} />
    </S.InputButton>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  isLoading: getIsGeolocationLoading(state),
  errorMessage: getGeolocationErrorMessage(state),
});

const mapDispatch = {
  _fetchGeolocation: fetchGeolocation,
  _fetchGeolocationByIP: fetchGeolocationByIP,
};

const connector = connect(mapState, mapDispatch);
export default connector(GeolocationButton);
