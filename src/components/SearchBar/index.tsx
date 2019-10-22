import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import GeolocationButton from 'components/common/buttons/GeolocationButton';
import { fetchCititesByName } from 'store/cities/actions';

import {
  StyledSearchForm,
  StyledSearchInput,
  StyledInputButtonsBlock,
  StyledInputButton,
} from './styles';

interface IPropsFromDispatch {
  _fetchCititesByName: (searchParams: string) => void;
}

export const SearchBar: React.FC<IPropsFromDispatch> = ({
  _fetchCititesByName,
}): React.ReactElement => {
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
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchInput
        placeholder={t('searchBar.placeholder')}
        value={cityName}
        onChange={handleChange}
      />

      <StyledInputButtonsBlock>
        <StyledInputButton disabled={isSubmitDisabled} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </StyledInputButton>

        <GeolocationButton />
      </StyledInputButtonsBlock>
    </StyledSearchForm>
  );
};

const mapDispatch: IPropsFromDispatch = {
  _fetchCititesByName: fetchCititesByName,
};

export default connect(null, mapDispatch)(SearchBar);
