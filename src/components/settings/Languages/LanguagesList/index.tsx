import React from 'react';

import { Locale } from 'models';
import LanguageButton from '../LanguageButton';

import { StyledLanguageSwitcher } from './styles';

type Props = {
  languages: Locale[];
  selectedLanguage: Locale;
  handleChangeLanguage: (language: Locale) => void;
};

const LanguageList: React.FC<Props> = ({
  languages,
  selectedLanguage,
  handleChangeLanguage,
}): React.ReactElement => (
  <StyledLanguageSwitcher>
    {languages.map(language => (
      <LanguageButton
        key={language.code}
        language={language}
        checked={language.code === selectedLanguage.code}
        handleChange={handleChangeLanguage}
      />
    ))}
  </StyledLanguageSwitcher>
);

export default LanguageList;
