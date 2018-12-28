import React from 'react';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

const LanguageButton = ({ language, checked, handleChange }) => (
  <StyledSwitchButton checked={checked}>
    <StyledLabel>
      <StyledRadioButton
        name="language"
        value={language}
        checked={checked}
        onChange={() => handleChange(language)}
      />

      <StyledLabelText>{language.title}</StyledLabelText>
    </StyledLabel>
  </StyledSwitchButton>
);

export default LanguageButton;
