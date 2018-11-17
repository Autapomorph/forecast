import React from 'react';

import UnitsFormatsButton from '../UnitsFormatsButton';

import { StyledUnitsFormatSwitcher } from './styles';

const UnitsFormatList = ({ unitsFormats, selectedUnitsFormat, handleChangeUnitsFormat }) => (
  <StyledUnitsFormatSwitcher>
    {Object.values(unitsFormats).map(unitsFormat => (
      <UnitsFormatsButton
        key={unitsFormat}
        unitsFormat={unitsFormat}
        checked={unitsFormat === selectedUnitsFormat}
        handleChange={handleChangeUnitsFormat}
      />
    ))}
  </StyledUnitsFormatSwitcher>
);

export default UnitsFormatList;
