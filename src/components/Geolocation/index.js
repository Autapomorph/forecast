import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import GeoButton from './GeoButton';
import Loader from '../common/Loader';
import Error from '../common/Error';
import { fetchGeolocation } from '../../store/geolocation/actions';
import { fetchCity } from '../../store/cities/actions';
import { getIsGeolocationLoading, getGeolocationErrorMessage } from '../../store/rootSelectors';
import { OWM_API_LATITUDE_QUERY_PARAM, OWM_API_LONGITUDE_QUERY_PARAM } from '../../config/weather';

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
      <Fragment>
        <GeoButton disabled={isLoading} onClick={this.fetchGeolocation} />
        {isLoading && <Loader text="fetching geolocation" />}
        {errorMessage && <Error>{errorMessage}</Error>}
      </Fragment>
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
