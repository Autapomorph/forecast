import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'store/types';
import { getCurrentUnitsFormat } from 'store/rootSelectors';
import { changeUnitsFormat } from 'store/settings/actions';
import { availableUnitsFormats } from 'config/settings/unitsFormats';
import UnitsFormatsList from './UnitsFormatsList';

type Props = ConnectedProps<typeof connector>;

export const UnitsFormats: React.FC<Props> = ({
  selectedUnitsFormat,
  _changeUnitsFormat,
}): React.ReactElement => (
  <UnitsFormatsList
    unitsFormats={availableUnitsFormats}
    selectedUnitsFormat={selectedUnitsFormat}
    handleChangeUnitsFormat={_changeUnitsFormat}
  />
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  selectedUnitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatch = {
  _changeUnitsFormat: changeUnitsFormat,
};

const connector = connect(mapState, mapDispatch);
export default connector(UnitsFormats);
