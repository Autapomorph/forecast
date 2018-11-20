import React from 'react';
import { withNamespaces } from 'react-i18next';
import Collapsible from 'react-collapsible';

import UnitsFormats from '../UnitsFormats';
import Languages from '../Languages';

import { StyledSettingsBar, GlobalStyleCollapsible } from './styles';

const SettingsBar = ({ t }) => (
  <StyledSettingsBar>
    <GlobalStyleCollapsible />
    <Collapsible trigger={t('settings.title')}>
      <Languages />
      <UnitsFormats />
    </Collapsible>
  </StyledSettingsBar>
);

export default withNamespaces()(SettingsBar);
