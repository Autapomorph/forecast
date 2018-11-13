import React from 'react';
import { connect } from 'react-redux';

import GeoError from './GeoError';
import { getGeolocationErrorMessage } from '../../store/rootSelectors';

import { StyledGeolocationSection } from './styles';

export const Geolocation = ({ errorMessage }) => (
  <StyledGeolocationSection>
    {errorMessage && <GeoError>{errorMessage}</GeoError>}
  </StyledGeolocationSection>
);

const mapStateToProps = state => ({
  errorMessage: getGeolocationErrorMessage(state),
});

export default connect(mapStateToProps)(Geolocation);
