import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import {
  fetchGeolocation,
  fetchGeolocationByIP,
  GeolocationSuccessCallback,
  GeolocationFailureCallback,
} from '../../../../store/geolocation/actions';
import { fetchCityWeatherByPosition } from '../../../../store/cities/actions';
import {
  getIsGeolocationLoading,
  getGeolocationErrorMessage,
} from '../../../../store/rootSelectors';
import { RootState } from '../../../../store/types';
import { ICoords } from '../../../../models';

import { StyledInputButton } from '../../../SearchBar/styles';

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

  _fetchCityWeatherByPosition: (coords: ICoords) => void;
}

type GeolocationButtonProps = IPropsFromState & IPropsFromDispatch & WithTranslation;

export class GeolocationButton extends Component<GeolocationButtonProps> {
  private toastId = 'geoError';

  public componentDidMount(): void {
    this.fetchGeolocationByIP();
  }

  public componentDidUpdate(): void {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage || ''), {
        toastId: this.toastId,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  private fetchGeolocation = () => {
    const { _fetchGeolocation } = this.props;

    _fetchGeolocation();
  };

  private fetchGeolocationByIP = () => {
    const { _fetchGeolocationByIP } = this.props;

    _fetchGeolocationByIP();
  };

  public render(): React.ReactElement {
    const { isLoading } = this.props;

    return (
      <StyledInputButton disabled={isLoading} onClick={this.fetchGeolocation}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </StyledInputButton>
    );
  }
}

const mapStateToProps = (state: RootState): IPropsFromState => ({
  isLoading: getIsGeolocationLoading(state),
  errorMessage: getGeolocationErrorMessage(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchGeolocation: fetchGeolocation,
  _fetchGeolocationByIP: fetchGeolocationByIP,
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(GeolocationButton));
