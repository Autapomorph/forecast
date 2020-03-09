import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Locale } from 'models';
import { RootState } from 'store/types';
import { getCurrentLanguage } from 'store/rootSelectors';
import { changeLanguage } from 'store/settings/actions';
import { availableLanguages } from 'config/i18n';
import Select from 'components/settings/Select';

import * as S from 'components/settings/Modal/styles';

type Props = ConnectedProps<typeof connector>;

export const Languages = ({ selectedLanguage, _changeLanguage }: Props): React.ReactElement => {
  const { t } = useTranslation();

  const options = availableLanguages.map(lang => ({ value: lang, label: lang.title }));
  const defaultValue = { value: selectedLanguage, label: selectedLanguage.title };

  return (
    <S.SettingContainer>
      <S.SettingTitle>{t('settings.languages.title')}</S.SettingTitle>

      <S.SettingContent>
        <Select
          value={defaultValue}
          options={options}
          onChange={selected => {
            const { value } = selected as { value: Locale; label: string };
            if (value !== selectedLanguage) {
              _changeLanguage(value);
            }
          }}
        />
      </S.SettingContent>
    </S.SettingContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  selectedLanguage: getCurrentLanguage(state),
});

const mapDispatch = {
  _changeLanguage: changeLanguage,
};

const connector = connect(mapState, mapDispatch);
export default connector(Languages);
