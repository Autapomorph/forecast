import React, { Component } from 'react';
import { connect } from 'react-redux';

import CitiesList from './CitiesList';
import EmptyResult from './EmptyResult';
import Loader from '../common/Loader';
import Error from '../common/Error';
import { fetchCity, addCityToFeatured, removeCityFromFeatured } from '../../store/cities/actions';
import {
  getCities,
  getIsCitiesActive,
  getIsCitiesLoading,
  getCitiesErrorMessage,
  getIsFeaturedCity,
} from '../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../config/weather';

import { StyledSearchResults } from './styles';

export class SearchResults extends Component {
  fetchCity = cityId => {
    const { _fetchCity } = this.props;

    _fetchCity({
      [OWM_API_CITY_ID_QUERY_PARAM]: cityId,
    });
  };

  render() {
    const {
      cities,
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

    if (!cities || !Object.keys(cities).length) {
      if (isLoading) {
        return <Loader text="fetching cities" />;
      }

      if (errorMessage) {
        return <Error>{errorMessage}</Error>;
      }

      return <EmptyResult />;
    }

    return (
      <StyledSearchResults>
        <CitiesList
          cities={cities}
          checkIfFeatured={checkIfFeatured}
          fetchCity={this.fetchCity}
          addCityToFeatured={_addCityToFeatured}
          removeCityFromFeatured={_removeCityFromFeatured}
        />
      </StyledSearchResults>
    );
  }
}

const mapStateToProps = state => ({
  cities: getCities(state),
  isActive: getIsCitiesActive(state),
  isLoading: getIsCitiesLoading(state),
  errorMessage: getCitiesErrorMessage(state),

  checkIfFeatured: getIsFeaturedCity(state),
});

const mapDispatchToProps = {
  _fetchCity: fetchCity,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
