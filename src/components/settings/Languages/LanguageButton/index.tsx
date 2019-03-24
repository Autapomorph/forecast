import React from 'react';

import { ILocale } from '../../../../models';

import { StyledSwitchButton, StyledLabel, StyledRadioButton, StyledLabelText } from './styles';

interface ILanguageButtonProps {
  language: ILocale;
  checked: boolean;
  handleChange: (unitFormat: ILocale) => void;
}

const LanguageButton: React.FC<ILanguageButtonProps> = ({
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