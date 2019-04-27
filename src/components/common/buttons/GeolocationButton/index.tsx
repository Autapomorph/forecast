import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useMount from 'react-use/lib/useMount';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { RootState } from 'store/types';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from 'store/rootSelectors';
import {
  fetchGeolocation,
  fetchGeolocationByIP,
  GeolocationSuccessCallback,
  GeolocationFailureCallback,
} from 'store/geolocation/actions';

import { StyledInputButton } from 'components/SearchBar/styles';

interface IPropsFromState {
  isLoading: ReturnType<typeof getIsGeolocationLoading>;
  errorMessage: ReturnType<typeof getGeolocationErrorMessage>;
}

interface IPropsFromDispatch {
  _fetchGeolocation: (
    successCb?: GeolocationSuccessCallback,
    errorCb?: GeolocationFailureCallback,
  ) => void;

  _fetchGeolocationByIP: (
    successCb?: GeolocationSuccessCallback,
    errorCb?: GeolocationFailureCallback,
  ) => void;
}

type GeolocationButtonProps = IPropsFromState & IPropsFromDispatch;

export const GeolocationButton: React.FC<GeolocationButtonProps> = ({
  isLoading,
  errorMessage,
  _fetchGeolocation,
  _fetchGeolocationByIP,
}): React.ReactElement => {
  const { t } = useTranslation();
  const toastId = 'geoError';

  useMount(_fetchGeolocationByIP);

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
    <StyledInputButton disabled={isLoading} onClick={() => _fetchGeolocation()}>
      <FontAwesomeIcon icon={faLocationArrow} />
    </StyledInputButton>
  );
};

const mapStateToProps = (state: RootState): IPropsFromState => ({
  isLoading: getIsGeolocationLoading(state),
  errorMessage: getGeolocationErrorMessage(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchGeolocation: fetchGeolocation,
  _fetchGeolocationByIP: fetchGeolocationByIP,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeolocationButton);
