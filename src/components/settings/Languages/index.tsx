import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'store/types';
import { getCurrentLanguage } from 'store/rootSelectors';
import { changeLanguage } from 'store/settings/actions';
import { availableLanguages } from 'config/settings/i18n';
import LanguagesList from './LanguagesList';

type Props = ConnectedProps<typeof connector>;

export const Languages = ({ selectedLanguage, _changeLanguage }: Props): React.ReactElement => (
  <LanguagesList
    languages={availableLanguages}
    selectedLanguage={selectedLanguage}
    handleChangeLanguage={_changeLanguage}
  />
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  selectedLanguage: getCurrentLanguage(state),
});

const mapDispatch = {
  _changeLanguage: changeLanguage,
};

const connector = connect(mapState, mapDispatch);
export default connector(Languages);
