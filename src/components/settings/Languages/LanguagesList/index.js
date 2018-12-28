import React from 'react';

import LanguageButton from '../LanguageButton';

import { StyledLanguageSwitcher } from './styles';

const LanguageList = ({ languages, selectedLanguage, handleChangeLanguage }) => (
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
