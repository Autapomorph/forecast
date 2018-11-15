import React from 'react';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

const UnitsFormatsButton = ({ unitsFormat, checked, handleChange }) => (
  <StyledSwitchButton checked={checked}>
    <StyledLabel>
      <StyledRadioButton
        name="units-format"
        value={unitsFormat.title}
        checked={checked}
        onChange={() => handleChange(unitsFormat)}
      />

      <StyledLabelText>{unitsFormat.title}</StyledLabelText>
    </StyledLabel>
  </StyledSwitchButton>
);

export default UnitsFormatsButton;
