import React from 'react';
import { connect } from 'react-redux';

import { changeUnitsFormat } from '../../store/settings/actions';
import { unitsFormats } from '../../config/settings';

export const Units = ({ _changeUnitsFormat }) => (
  <div>
    {Object.values(unitsFormats).map(unitsFormat =>
      unitsFormat.title === 'standart' ? null : (
        <button
          key={unitsFormat.title}
          type="button"
          onClick={() => _changeUnitsFormat(unitsFormat)}
        >
          {unitsFormat.title}
        </button>
      ),
    )}
  </div>
);

const mapDispatchToProps = {
  _changeUnitsFormat: changeUnitsFormat,
};

export default connect(
  null,
  mapDispatchToProps,
)(Units);
