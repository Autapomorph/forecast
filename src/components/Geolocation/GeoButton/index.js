import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { fetchGeolocation, fetchGeolocationByIP } from '../../../store/geolocation/actions';
import { fetchCityWeather } from '../../../store/cities/actions';
import { getIsGeolocationLoading } from '../../../store/rootSelectors';
import {
  OWM_API_LATITUDE_QUERY_PARAM,
  OWM_API_LONGITUDE_QUERY_PARAM,
} from '../../../config/weather';

import { StyledGeoButton } from './styles';

export class GeoButton extends Component {
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
    const { isLoading } = this.props;

    return (
      <StyledGeoButton disabled={isLoading} onClick={this.fetchGeolocation}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </StyledGeoButton>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsGeolocationLoading(state),
});

const mapDispatchToProps = {
  _fetchGeolocation: fetchGeolocation,
  _fetchGeolocationByIP: fetchGeolocationByIP,
  _fetchCityWeather: fetchCityWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeoButton);
