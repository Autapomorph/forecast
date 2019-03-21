import React from 'react';
import { connect } from 'react-redux';

import UnitsFormatsList from './UnitsFormatsList';
import { getCurrentUnitsFormat } from '../../../store/rootSelectors';
import { changeUnitsFormat } from '../../../store/settings/actions';
import { availableUnitsFormats } from '../../../config/settings/unitsFormats';

export const UnitsFormats = ({ selectedUnitsFormat, _changeUnitsFormat }) => (
  <UnitsFormatsList
    unitsFormats={availableUnitsFormats}
    selectedUnitsFormat={selectedUnitsFormat}
    handleChangeUnitsFormat={_changeUnitsFormat}
  />
);

const mapStateToProps = state => ({
  selectedUnitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatchToProps = {
  _changeUnitsFormat: changeUnitsFormat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitsFormats);
