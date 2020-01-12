import React from 'react';

import { UnitFormat } from 'models';
import UnitsFormatsButton from '../UnitsFormatsButton';

import { StyledUnitsFormatSwitcher } from './styles';

type Props = {
  unitsFormats: UnitFormat[];
  selectedUnitsFormat: UnitFormat;
  handleChangeUnitsFormat: (unitFormat: UnitFormat) => void;
};

const UnitsFormatList: React.FC<Props> = ({
  unitsFormats,
  selectedUnitsFormat,
  handleChangeUnitsFormat,
}): React.ReactElement => (
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
