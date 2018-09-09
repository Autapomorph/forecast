import React, { Component } from 'react';
import { connect } from 'react-redux';

import GeoButton from './GeoButton';
import { fetchGeolocation } from '../../store/geolocation/actions';
import { fetchCity } from '../../store/cities/actions';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from '../../store/rootSelectors';
import { OWM_API_LATITUDE_QUERY_PARAM, OWM_API_LONGITUDE_QUERY_PARAM } from '../../config/weather';

import { StyledGeolocation, StyledGeoError } from './styles';

export class Geolocation extends Component {
  componentDidMount() {
    this.fetchGeolocation();
  }

  fetchGeolocation = () => {
    const { _fetchGeolocation } = this.props;

    _fetchGeolocation(this.geoLocationSuccess);
  };

  geoLocationSuccess = geoData => {
    const { _fetchCity } = this.props;
    const { latitude, longitude } = geoData.coords;

    _fetchCity({
      [OWM_API_LATITUDE_QUERY_PARAM]: latitude,
      [OWM_API_LONGITUDE_QUERY_PARAM]: longitude,
    });
  };

  render() {
    const { isLoading, errorMessage } = this.props;

    return (
      <StyledGeolocation>
        <GeoButton isLoading={isLoading} onClick={this.fetchGeolocation} />

        {errorMessage && <StyledGeoError>{errorMessage}</StyledGeoError>}
      </StyledGeolocation>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsGeolocationLoading(state),
  errorMessage: getGeolocationErrorMessage(state),
});

const mapDispatchToProps = {
  _fetchGeolocation: fetchGeolocation,
  _fetchCity: fetchCity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Geolocation);
