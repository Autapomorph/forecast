import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import { fetchCititesByName } from '../../store/cities/actions';
import { OWM_API_CITY_NAME_QUERY_PARAM } from '../../config/weather';

import { StyledSearchInput, StyledSearchButton } from './styles';

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

    _fetchCititesByName({
      [OWM_API_CITY_NAME_QUERY_PARAM]: cityName,
    });

    this.setState(
      {
        cityName: '',
      },
      this.validateForm,
    );
  };

  render() {
    const { cityName, isSubmitDisabled } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <StyledSearchInput
          placeholder="Введите город"
          value={cityName}
          onChange={this.handleChange}
        />
        <StyledSearchButton disabled={isSubmitDisabled} onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </StyledSearchButton>
      </form>
    );
  }
}

const mapDispatchToProps = {
  _fetchCititesByName: fetchCititesByName,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
