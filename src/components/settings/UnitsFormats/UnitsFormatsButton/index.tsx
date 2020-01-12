import React from 'react';
import { useTranslation } from 'react-i18next';

import { UnitFormat } from 'models';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

type Props = {
  unitsFormat: UnitFormat;
  checked: boolean;
  handleChange: (unitFormat: UnitFormat) => void;
};

const UnitsFormatsButton: React.FC<Props> = ({
  unitsFormat,
  checked,
  handleChange,
}): React.ReactElement => {
  const { t } = useTranslation();

  return (
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
};

export default UnitsFormatsButton;
