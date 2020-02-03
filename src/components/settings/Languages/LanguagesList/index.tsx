import React from 'react';

import { Locale } from 'models';
import LanguageButton from '../LanguageButton';

import * as S from './styles';

type Props = {
  languages: Locale[];
  selectedLanguage: Locale;
  handleChangeLanguage: (language: Locale) => void;
};

const LanguageList = ({
  languages,
  selectedLanguage,
  handleChangeLanguage,
}: Props): React.ReactElement => (
  <S.LanguageSwitcher>
    {languages.map(language => (
      <LanguageButton
        key={language.code}
        language={language}
        checked={language.code === selectedLanguage.code}
        handleChange={handleChangeLanguage}
      />
    ))}
  </S.LanguageSwitcher>
);

export default LanguageList;
