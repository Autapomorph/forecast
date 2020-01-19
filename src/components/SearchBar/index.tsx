import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import GeolocationButton from 'components/common/buttons/GeolocationButton';
import { fetchCititesByName } from 'store/cities/actions';

import * as S from './styles';

type Props = ConnectedProps<typeof connector>;

export const SearchBar: React.FC<Props> = ({ _fetchCititesByName }): React.ReactElement => {
  const { t } = useTranslation();
  const [cityName, setCityName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (!cityName.trim()) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [cityName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    e.preventDefault();
    _fetchCititesByName(cityName);
    setCityName('');
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchInput
        placeholder={t('searchBar.placeholder')}
        value={cityName}
        onChange={handleChange}
      />

      <S.InputButtonsBlock>
        <S.InputButton disabled={isSubmitDisabled} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </S.InputButton>

        <GeolocationButton />
      </S.InputButtonsBlock>
    </S.SearchForm>
  );
};

const mapDispatch = {
  _fetchCititesByName: fetchCititesByName,
};

const connector = connect(null, mapDispatch);
export default connector(SearchBar);
