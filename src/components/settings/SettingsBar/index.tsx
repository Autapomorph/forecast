import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';

import UnitsFormats from '../UnitsFormats';
import Languages from '../Languages';

import { StyledSettingsBar, GlobalStyleCollapsible } from './styles';

const SettingsBar: React.FC<WithTranslation> = ({ t }): React.ReactElement => (
  <StyledSettingsBar>
    <GlobalStyleCollapsible />
    <Collapsible trigger={t('settings.title')}>
      <Languages />
      <UnitsFormats />
    </Collapsible>
  </StyledSettingsBar>
);

export default withTranslation()(SettingsBar);