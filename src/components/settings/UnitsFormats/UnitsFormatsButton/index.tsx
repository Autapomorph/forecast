import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { UnitFormat } from 'models';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

interface IUnitsFormatsButtonProps extends WithTranslation {
  unitsFormat: UnitFormat;
  checked: boolean;
  handleChange: (unitFormat: UnitFormat) => void;
}

const UnitsFormatsButton: React.FC<IUnitsFormatsButtonProps> = ({
  t,
  unitsFormat,
  checked,
  handleChange,
}): React.ReactElement => (
  <StyledSwitchButton checked={checked}>
    <StyledLabel>
      <StyledRadioButton
        name="units-format"
        value={unitsFormat}
        checked={checked}
        onChange={() => handleChange(unitsFormat)}
      />

      <StyledLabelText>{`${t(`settings.unitsFormats.title.${unitsFormat}`)}`}</StyledLabelText>
    </StyledLabel>
  </StyledSwitchButton>
);

export default withTranslation()(UnitsFormatsButton);
