import React from 'react';
import { withNamespaces } from 'react-i18next';
import Collapsible from 'react-collapsible';

import UnitsFormats from '../UnitsFormats';
import Languages from '../Languages';

import { StyledSettingsBar } from './styles';
import './index.css';

const SettingsBar = ({ t }) => (
  <StyledSettingsBar>
    <Collapsible trigger={t('settings.title')}>
      <Languages />
      <UnitsFormats />
    </Collapsible>
  </StyledSettingsBar>
);

export default withNamespaces()(SettingsBar);
