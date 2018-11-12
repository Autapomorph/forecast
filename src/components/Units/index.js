import React from 'react';
import { connect } from 'react-redux';

import { changeUnitsFormat } from '../../store/settings/actions';
import { getUnitsFormats } from '../../store/rootSelectors';

export const Units = ({ unitsFormats, _changeUnitsFormat }) => (
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

const mapStateToProps = state => ({
  unitsFormats: getUnitsFormats(state),
});

const mapDispatchToProps = {
  _changeUnitsFormat: changeUnitsFormat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Units);
