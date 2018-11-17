import React from 'react';
import { withNamespaces } from 'react-i18next';

export const Languages = ({ i18n }) => (
  <div>
    <button type="button" onClick={() => i18n.changeLanguage('ru-RU')}>
      ru
    </button>
    <button type="button" onClick={() => i18n.changeLanguage('en-US')}>
      en
    </button>
  </div>
);

export default withNamespaces()(Languages);
