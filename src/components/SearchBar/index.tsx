import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
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

type SearchBarProps = IPropsFromDispatch & WithTranslation;

export class SearchBar extends Component<SearchBarProps> {
  public state = {
    cityName: '',
    isSubmitDisabled: true,
  };

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        cityName: e.currentTarget.value,
      },
      this.validateForm,
    );
  };

  private validateForm = () => {
    const { cityName } = this.state;

    if (!cityName.trim()) {
      this.setState({
        isSubmitDisabled: true,
      });
    } else {
      this.setState({
        isSubmitDisabled: false,
      });
    }
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    const { _fetchCititesByName } = this.props;
    const { cityName } = this.state;

    _fetchCititesByName(cityName);

    this.setState(
      {
        cityName: '',
      },
      this.validateForm,
    );
  };

  public render(): React.ReactElement {
    const { t } = this.props;
    const { cityName, isSubmitDisabled } = this.state;

    return (
      <StyledSearchForm onSubmit={this.handleSubmit}>
        <StyledSearchInput
          placeholder={t('searchBar.placeholder')}
          value={cityName}
          onChange={this.handleChange}
        />

        <StyledInputButtonsBlock>
          <StyledInputButton disabled={isSubmitDisabled} onClick={this.handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </StyledInputButton>

          <GeolocationButton />
        </StyledInputButtonsBlock>
      </StyledSearchForm>
    );
  }
}

const mapDispatchToProps: IPropsFromDispatch = {
  _fetchCititesByName: fetchCititesByName,
};

export default connect(
  null,
  mapDispatchToProps,
)(withTranslation()(SearchBar));
