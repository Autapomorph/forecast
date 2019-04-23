import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'store/types';
import { getCurrentUnitsFormat } from 'store/rootSelectors';
import { changeUnitsFormat } from 'store/settings/actions';
import { availableUnitsFormats } from 'config/settings/unitsFormats';
import UnitsFormatsList from './UnitsFormatsList';

interface IPropsFromState {
  selectedUnitsFormat: ReturnType<typeof getCurrentUnitsFormat>;
}

interface IPropsFromDispatch {
  _changeUnitsFormat: typeof changeUnitsFormat;
}

type UnitsFormatsProps = IPropsFromState & IPropsFromDispatch;

export const UnitsFormats: React.FC<UnitsFormatsProps> = ({
  selectedUnitsFormat,
  _changeUnitsFormat,
}): React.ReactElement => (
  <UnitsFormatsList
    unitsFormats={availableUnitsFormats}
    selectedUnitsFormat={selectedUnitsFormat}
    handleChangeUnitsFormat={_changeUnitsFormat}
  />
);

const mapStateToProps = (state: RootState): IPropsFromState => ({
  selectedUnitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _changeUnitsFormat: changeUnitsFormat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitsFormats);
