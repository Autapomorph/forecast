import React from 'react';
import { connect } from 'react-redux';

import LanguagesList from './LanguagesList';
import { getCurrentLanguage } from '@/store/rootSelectors';
import { changeLanguage } from '@/store/settings/actions';
import { availableLanguages } from '@/config/settings/i18n';

export const Languages = ({ selectedLanguage, _changeLanguage }) => (
  <LanguagesList
    languages={availableLanguages}
    selectedLanguage={selectedLanguage}
    handleChangeLanguage={_changeLanguage}
  />
);

const mapStateToProps = state => ({
  selectedLanguage: getCurrentLanguage(state),
});

const mapDispatchToProps = {
  _changeLanguage: changeLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Languages);
