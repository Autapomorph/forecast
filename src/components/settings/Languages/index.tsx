import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'store/types';
import { getCurrentLanguage } from 'store/rootSelectors';
import { changeLanguage } from 'store/settings/actions';
import { availableLanguages } from 'config/settings/i18n';
import LanguagesList from './LanguagesList';

interface IPropsFromState {
  selectedLanguage: ReturnType<typeof getCurrentLanguage>;
}

interface IPropsFromDispatch {
  _changeLanguage: typeof changeLanguage;
}

type IProps = IPropsFromState & IPropsFromDispatch;

export const Languages: React.FC<IProps> = ({
  selectedLanguage,
  _changeLanguage,
}): React.ReactElement => (
  <LanguagesList
    languages={availableLanguages}
    selectedLanguage={selectedLanguage}
    handleChangeLanguage={_changeLanguage}
  />
);

const mapState = (state: RootState): IPropsFromState => ({
  selectedLanguage: getCurrentLanguage(state),
});

const mapDispatch: IPropsFromDispatch = {
  _changeLanguage: changeLanguage,
};

export default connect(mapState, mapDispatch)(Languages);
