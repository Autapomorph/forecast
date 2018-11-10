import React, { Component } from 'react';
import { connect } from 'react-redux';

import City from './City';
import Loader from '../../common/messages/Loader';
import {
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
} from '../../../store/cities/actions';
import {
  getSelectedCity,
  getIsSelectedCityActive,
  getIsSelectedCityLoading,
  getSelectedCityErrorMessage,
  getIsFeaturedCity,
} from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

import { StyledSelectedCitySection, StyledSelectedCityError } from './styles';

export class SelectedCity extends Component {
  fetchCityWeather = cityId => {
    const { _fetchCityWeather } = this.props;

    _fetchCityWeather({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const {
      city,
      isActive,
      isLoading,
      errorMessage,
      checkIfFeatured,
      _addCityToFeatured,
      _removeCityFromFeatured,
    } = this.props;

    if (!isActive) {
      return null;
    }

    if (isLoading) {
      return (
        <StyledSelectedCitySection isLoading>
          <Loader />
        </StyledSelectedCitySection>
      );
    }

    if (errorMessage) {
      return (
        <StyledSelectedCitySection>
          <StyledSelectedCityError>{errorMessage}</StyledSelectedCityError>
        </StyledSelectedCitySection>
      );
    }

    return (
      <StyledSelectedCitySection>
        <City
          city={city}
          isFeatured={checkIfFeatured(city.id)}
          refetchCityWeather={() => this.fetchCityWeather(city.id)}
          addCityToFeatured={_addCityToFeatured}
          removeCityFromFeatured={_removeCityFromFeatured}
        />
      </StyledSelectedCitySection>
    );
  }
}

const mapStateToProps = state => ({
  city: getSelectedCity(state),
  isActive: getIsSelectedCityActive(state),
  isLoading: getIsSelectedCityLoading(state),
  errorMessage: getSelectedCityErrorMessage(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps = {
  _fetchCityWeather: fetchCityWeather,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCity);
