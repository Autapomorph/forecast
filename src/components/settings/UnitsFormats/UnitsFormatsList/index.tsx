import React from 'react';

import { UnitFormat } from 'models';
import UnitsFormatsButton from '../UnitsFormatsButton';

import * as S from './styles';

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
  <S.UnitsFormatSwitcher>
    {Object.values(unitsFormats).map(unitsFormat => (
      <UnitsFormatsButton
        key={unitsFormat}
        unitsFormat={unitsFormat}
        checked={unitsFormat === selectedUnitsFormat}
        handleChange={handleChangeUnitsFormat}
      />
    ))}
  </S.UnitsFormatSwitcher>
);

export default UnitsFormatList;
