import React from 'react';

import { Locale } from 'models';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

type Props = {
  language: Locale;
  checked: boolean;
  handleChange: (unitFormat: Locale) => void;
};

const LanguageButton: React.FC<Props> = ({
  language,
  checked,
  handleChange,
}): React.ReactElement => (
  <StyledSwitchButton checked={checked}>
    <StyledLabel>
      <StyledRadioButton
        name="language"
        value={language.code}
        checked={checked}
        onChange={() => handleChange(language)}
      />

      <StyledLabelText>{language.title}</StyledLabelText>
    </StyledLabel>
  </StyledSwitchButton>
);

export default LanguageButton;
