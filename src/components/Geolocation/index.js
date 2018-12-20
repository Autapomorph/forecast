import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import GeoError from './GeoError';
import { getGeolocationErrorMessage } from '../../store/rootSelectors';

import { StyledGeolocationSection } from './styles';

export const Geolocation = ({ t, errorMessage }) => (
  <StyledGeolocationSection>
    {errorMessage && <GeoError>{t(errorMessage)}</GeoError>}
  </StyledGeolocationSection>
);

const mapStateToProps = state => ({
  errorMessage: getGeolocationErrorMessage(state),
});

export default connect(mapStateToProps)(withNamespaces()(Geolocation));
