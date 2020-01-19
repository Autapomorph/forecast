import React from 'react';

import { Locale } from 'models';

import * as S from './styles';

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
  <S.SwitchButton checked={checked}>
    <S.Label>
      <S.RadioButton
        name="language"
        value={language.code}
        checked={checked}
        onChange={() => handleChange(language)}
      />

      <S.LabelText>{language.title}</S.LabelText>
    </S.Label>
  </S.SwitchButton>
);

export default LanguageButton;
