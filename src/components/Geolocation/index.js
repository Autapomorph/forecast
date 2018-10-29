import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeoButton from './GeoButton';
import GeoError from './GeoError';
import { fetchGeolocation, fetchGeolocationByIP } from '../../store/geolocation/actions';
import { fetchCityWeather } from '../../store/cities/actions';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from '../../store/rootSelectors';
import { OWM_API_LATITUDE_QUERY_PARAM, OWM_API_LONGITUDE_QUERY_PARAM } from '../../config/weather';

import { StyledGeolocationSection } from './styles';

export class Geolocation extends Component {
  componentDidMount() {
    this.fetchGeolocationByIP();
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
    const { _fetchCityWeather } = this.props;
    const { latitude, longitude } = geoData.coords;

    _fetchCityWeather({
      [OWM_API_LATITUDE_QUERY_PARAM]: latitude,
      [OWM_API_LONGITUDE_QUERY_PARAM]: longitude,
    });
  };

  render() {
    const { icon, isLoading, errorMessage } = this.props;

    if (icon) {
      return <GeoButton isLoading={isLoading} onClick={this.fetchGeolocation} />;
    }

    return (
      <StyledGeolocationSection>
        {errorMessage && <GeoError>{errorMessage}</GeoError>}
      </StyledGeolocationSection>
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
  _fetchCityWeather: fetchCityWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Geolocation);
