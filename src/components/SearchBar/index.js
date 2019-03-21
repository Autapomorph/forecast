import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import GeolocationButton from '../common/buttons/GeolocationButton';
import { fetchCititesByName } from '../../store/cities/actions';

import {
  StyledSearchForm,
  StyledSearchInput,
  StyledInputButtonsBlock,
  StyledInputButton,
} from './styles';

export class SearchBar extends Component {
  state = {
    cityName: '',
    isSubmitDisabled: true,
  };

  handleChange = e => {
    this.setState(
      {
        cityName: e.target.value,
      },
      this.validateForm,
    );
  };

  validateForm = () => {
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

  handleSubmit = e => {
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

  render() {
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

const mapDispatchToProps = {
  _fetchCititesByName: fetchCititesByName,
};

export default connect(
  null,
  mapDispatchToProps,
)(withTranslation()(SearchBar));
