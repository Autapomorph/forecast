import React from 'react';
import { withTranslation } from 'react-i18next';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

const UnitsFormatsButton = ({ t, unitsFormat, checked, handleChange }) => (
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
