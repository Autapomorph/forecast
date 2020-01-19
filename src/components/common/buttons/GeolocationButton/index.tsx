import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import useMount from 'react-use/lib/useMount';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { RootState } from 'store/types';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from 'store/rootSelectors';
import { fetchGeolocation, fetchGeolocationByIP } from 'store/geolocation/actions';
import checkGeolocationPermission from 'utils/geolocation/checkPermission';

import * as S from 'components/SearchBar/styles';

type Props = ConnectedProps<typeof connector>;

export const GeolocationButton: React.FC<Props> = ({
  isLoading,
  errorMessage,
  _fetchGeolocation,
  _fetchGeolocationByIP,
}): React.ReactElement => {
  const { t } = useTranslation();
  const toastId = 'geoError';

  useMount(() => {
    checkGeolocationPermission()
      .then(_fetchGeolocation)
      .catch(_fetchGeolocationByIP);
  });

  useEffect(() => {
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(toastId);
    }
  });

  return (
    <S.InputButton disabled={isLoading} onClick={_fetchGeolocation}>
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
