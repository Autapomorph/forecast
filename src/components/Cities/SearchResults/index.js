import React, { Component } from 'react';
import { connect } from 'react-redux';

import CitiesList from './CitiesList';
import EmptyResult from './EmptyResult';
import Title from '../../common/Title';
import Loader from '../../common/messages/Loader';
import Error from '../../common/messages/Error';
import {
  fetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
} from '../../../store/cities/actions';
import {
  getCities,
  getIsCitiesActive,
  getIsCitiesLoading,
  getCitiesErrorMessage,
  getIsFeaturedCity,
} from '../../../store/rootSelectors';
import { OWM_API_CITY_ID_QUERY_PARAM } from '../../../config/weather';

import { StyledSearchResultsSection, StyledSearchResultsHeader } from './styles';

export class SearchResults extends Component {
  fetchCityWeather = cityId => {
    const { _fetchCityWeather } = this.props;

    _fetchCityWeather({
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
        return (
          <StyledSearchResultsSection>
            <Loader />
          </StyledSearchResultsSection>
        );
      }

      if (errorMessage) {
        return (
          <StyledSearchResultsSection>
            <Error>{errorMessage}</Error>
          </StyledSearchResultsSection>
        );
      }

      return (
        <StyledSearchResultsSection>
          <EmptyResult />;
        </StyledSearchResultsSection>
      );
    }

    return (
      <StyledSearchResultsSection>
        <StyledSearchResultsHeader>
          <Title>Результаты поиска</Title>
        </StyledSearchResultsHeader>

        <CitiesList
          cities={cities}
          checkIfFeatured={checkIfFeatured}
          fetchCityWeather={this.fetchCityWeather}
          addCityToFeatured={_addCityToFeatured}
          removeCityFromFeatured={_removeCityFromFeatured}
        />
      </StyledSearchResultsSection>
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
  _fetchCityWeather: fetchCityWeather,
  _addCityToFeatured: addCityToFeatured,
  _removeCityFromFeatured: removeCityFromFeatured,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
