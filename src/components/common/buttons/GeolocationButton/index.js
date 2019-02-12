import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { fetchGeolocation, fetchGeolocationByIP } from '~/store/geolocation/actions';
import { fetchCityWeatherByPosition } from '~/store/cities/actions';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from '~/store/rootSelectors';

import { StyledInputButton } from '~/components/SearchBar/styles';

export class GeolocationButton extends Component {
  toastId = 'geoError';

  componentDidMount() {
    this.fetchGeolocationByIP();
  }

  componentDidUpdate() {
    const { t, isLoading, errorMessage } = this.props;
    const shouldShowToast = !isLoading && errorMessage && !toast.isActive(this.toastId);
    const shouldDismissToast = !isLoading && !errorMessage && toast.isActive(this.toastId);

    if (shouldShowToast) {
      toast.error(t(errorMessage), {
        toastId: this.toastId,
      });
    } else if (shouldDismissToast) {
      toast.dismiss(this.toastId);
    }
  }

  fetchGeolocation = () => {
    const { _fetchGeolocation } = this.props;

    _fetchGeolocation()
      .then(this.geoLocationSuccess)
      .catch(() => {});
  };

  fetchGeolocationByIP = () => {
    const { _fetchGeolocationByIP } = this.props;

    _fetchGeolocationByIP()
      .then(this.geoLocationSuccess)
      .catch(() => {});
  };

  geoLocationSuccess = geoData => {
    const { _fetchCityWeatherByPosition } = this.props;
    const { latitude, longitude } = geoData.coords;

    _fetchCityWeatherByPosition({ latitude, longitude });
  };

  render() {
    const { isLoading } = this.props;

    return (
      <StyledInputButton disabled={isLoading} onClick={this.fetchGeolocation}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </StyledInputButton>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsGeolocationLoading(state),
  errorMessage: getGeolocationErrorMessage(state),
});

const mapDispatchToProps = {
  _fetchGeolocation: fetchGeolocation,
  _fetchGeolocationByIP: fetchGeolocationByIP,
  _fetchCityWeatherByPosition: fetchCityWeatherByPosition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(GeolocationButton));
