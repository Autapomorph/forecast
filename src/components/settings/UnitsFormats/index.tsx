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

type IProps = IPropsFromState & IPropsFromDispatch;

export const UnitsFormats: React.FC<IProps> = ({
  selectedUnitsFormat,
  _changeUnitsFormat,
}): React.ReactElement => (
  <UnitsFormatsList
    unitsFormats={availableUnitsFormats}
    selectedUnitsFormat={selectedUnitsFormat}
    handleChangeUnitsFormat={_changeUnitsFormat}
  />
);

const mapState = (state: RootState): IPropsFromState => ({
  selectedUnitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatch: IPropsFromDispatch = {
  _changeUnitsFormat: changeUnitsFormat,
};

export default connect(mapState, mapDispatch)(UnitsFormats);
