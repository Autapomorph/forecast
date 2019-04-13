import React from 'react';

import UnitsFormatsButton from '../UnitsFormatsButton';
import { UnitFormat } from '../../../../models';

import { StyledUnitsFormatSwitcher } from './styles';

interface IUnitsFormatListProps {
  unitsFormats: UnitFormat[];
  selectedUnitsFormat: UnitFormat;
  handleChangeUnitsFormat: (unitFormat: UnitFormat) => void;
}

const UnitsFormatList: React.FC<IUnitsFormatListProps> = ({
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
