import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/macro';

import { Theme } from 'models';

import * as ModalStyles from 'components/settings/Modal/styles';
import * as LocalStyles from './styles';

type Props = {
  onClick: () => void;
};

const S = {
  ...ModalStyles,
  ...LocalStyles,
};

const ThemeToggler = ({ onClick }: Props): React.ReactElement => {
  const { t } = useTranslation();
  const { mode } = useTheme() as Theme;
  const isDarkMode = mode === 'dark';

  return (
    <S.SettingContainer>
      <S.SettingTitle>{t('settings.themes.title')}</S.SettingTitle>

      <S.SettingContent>
        <S.Checkbox id="settings__theme" checked={isDarkMode} onChange={onClick} />
        <S.Label htmlFor="settings__theme" />
      </S.SettingContent>
    </S.SettingContainer>
  );
};

export default ThemeToggler;
