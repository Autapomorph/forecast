import React from 'react';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';

import UnitsFormats from 'components/settings/UnitsFormats';
import Languages from 'components/settings/Languages';

import * as S from './styles';

const SettingsBar: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <S.SettingsBar>
      <S.GlobalStyleCollapsible />
      <Collapsible trigger={t('settings.title')}>
        <Languages />
        <UnitsFormats />
      </Collapsible>
    </S.SettingsBar>
  );
};

export default SettingsBar;
