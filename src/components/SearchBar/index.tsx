import React, { useState, useRef, useContext } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import GeolocationButton from 'components/SearchBar/GeolocationButton';
import { fetchCititesByName } from 'store/cities/actions';
import ModalContext from 'context/settingsModal';

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const SearchBar = ({ _fetchCititesByName }: Props): React.ReactElement => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState('');
  const modalContext = useContext(ModalContext);

  const isSubmitDisabled = !cityName.trim();
  const isClearDisabled = !cityName.length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    inputRef.current?.blur();
    _fetchCititesByName(cityName);
  };

  const handleClear = (): void => {
    // eslint-disable-next-line no-unused-expressions
    inputRef.current?.focus();
    setCityName('');
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchInput
        ref={inputRef}
        placeholder={t('searchBar.placeholder')}
        value={cityName}
        onChange={e => setCityName(e.target.value)}
      />

      <S.ClearButton onClick={handleClear} disabled={isClearDisabled}>
        <FontAwesomeIcon icon={faTimes} />
      </S.ClearButton>

      <S.InputButtonsBlock>
        <S.SettingsButton disabled={modalContext.isOpen} onClick={modalContext.open}>
          <FontAwesomeIcon icon={faSlidersH} />
        </S.SettingsButton>

        <S.SearchButton disabled={isSubmitDisabled}>
          <FontAwesomeIcon icon={faSearch} />
        </S.SearchButton>

        <GeolocationButton onClick={() => setCityName('')} />
      </S.InputButtonsBlock>
    </S.SearchForm>
  );
};

const mapDispatch = {
  _fetchCititesByName: fetchCititesByName,
};

const connector = connect(null, mapDispatch);
export default connector(SearchBar);
