import React from 'react';

import { ILocale } from 'models';
import LanguageButton from '../LanguageButton';

import { StyledLanguageSwitcher } from './styles';

interface ILanguageListProps {
  languages: ILocale[];
  selectedLanguage: ILocale;
  handleChangeLanguage: (language: ILocale) => void;
}

const LanguageList: React.FC<ILanguageListProps> = ({
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
