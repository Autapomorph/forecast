import React from 'react';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

const UnitsFormatsButton = ({ unitsFormat, checked, handleChange }) => {
  const id = `${unitsFormat.title}-units-format`;

  return (
    <StyledSwitchButton checked={checked}>
      <StyledLabel htmlFor={id}>
        <StyledRadioButton
          id={id}
          name="units-format"
          value={unitsFormat.title}
          checked={checked}
          onChange={() => handleChange(unitsFormat)}
        />

        <StyledLabelText>{unitsFormat.title}</StyledLabelText>
      </StyledLabel>
    </StyledSwitchButton>
  );
};

export default UnitsFormatsButton;
