import React from 'react';
import { connect } from 'react-redux';

import LanguagesList from './LanguagesList';
import { getCurrentLanguage } from '../../../store/rootSelectors';
import { changeLanguage } from '../../../store/settings/actions';
import { availableLanguages } from '../../../config/settings/i18n';
import { RootState } from '../../../store/types';

interface IPropsFromState {
  selectedLanguage: ReturnType<typeof getCurrentLanguage>;
}

interface IPropsFromDispatch {
  _changeLanguage: typeof changeLanguage;
}

type LanguagesProps = IPropsFromState & IPropsFromDispatch;

export const Languages: React.FC<LanguagesProps> = ({
  selectedLanguage,
  _changeLanguage,
}): React.ReactElement => (
  <LanguagesList
    languages={availableLanguages}
    selectedLanguage={selectedLanguage}
    handleChangeLanguage={_changeLanguage}
  />
);

const mapStateToProps = (state: RootState): IPropsFromState => ({
  selectedLanguage: getCurrentLanguage(state),
});

const mapDispatchToProps: IPropsFromDispatch = {
  _changeLanguage: changeLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Languages);
