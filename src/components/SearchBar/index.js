import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCititesByName } from '../../store/cities/actions';
import { OWM_API_CITY_NAME_QUERY_PARAM } from '../../config/weather';

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
        <input
          type="text"
          placeholder="Введите город"
          value={cityName}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={isSubmitDisabled} onClick={this.handleSubmit}>
          Узнать погоду
        </button>
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
