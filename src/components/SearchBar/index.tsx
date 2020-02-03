import React, { useState, useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import GeolocationButton from 'components/common/buttons/GeolocationButton';
import { fetchCititesByName } from 'store/cities/actions';

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const SearchBar = ({ _fetchCititesByName }: Props): React.ReactElement => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (!cityName.trim()) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [cityName]);

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

      <S.ClearButton onClick={handleClear} disabled={!cityName.length}>
        <FontAwesomeIcon icon={faTimes} />
      </S.ClearButton>

      <S.InputButtonsBlock>
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
